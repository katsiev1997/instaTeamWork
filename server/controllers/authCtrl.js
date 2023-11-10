const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 const authCtrl = {
    register: async (req , res) => {
        try{
            const { email , fullname , username , password } = req.body

            const user_name = await Users.findOne({ username})
            if(user_name) return res.status(400).json({msg: "Пользователь с таким именем уже есть."})

            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({mas: 'Почта занято'})

            if(password.length < 6) {
                return res.status(400).json({msg: 'Минимально количество символов 6'})
            }

            const passwordHash = await bcrypt.hash(password , 6)

            const newUser = new Users({
                email , fullname , username , password: passwordHash 
            })

            await newUser.save()

            res.json({
                msg: 'Регистрация прошла  успешна'
            })


        }
        catch{

        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await Users.findOne({email})
            .populate("followers following", "avatar username fullname followers following")

            if(!user) return res.status(400).json({msg: "Пользователь с такой почтой нет."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Неправильный пароль."})

            const access_token = createAccessToken({id: user._id})
            const refresh_token = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 
            })

            res.json({
                msg: 'Login Success!',
                token: access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/api/refresh_token'})
            return res.json({msg: "Logged out!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg: "Пожалуйста войдите."})


            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async(err, result) => {
                if(err) return res.status(400).json({msg: "Пожалуйста войдите."})

                const user = await Users.findById(result.id).select("-password")
                .populate('followers following', 'avatar username fullname followers following')

                if(!user) return res.status(400).json({msg: "Пользователя нет."})

                const access_token = createAccessToken({id: result.id})

                res.json({
                    token: access_token,
                    user
                })
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'})
}
