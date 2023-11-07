import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

export enum RegisterFormNames {
    EMAIL = 'email',
    FULLNAME = 'fullname',
    USERNAME = 'username',
    PASSWORD = 'password',
    CF_PASSWORD = 'cf_password'
}
export interface RegisterFormValues {
    email?: string,
    fullname?: string,
    username?: string,
    password?: string,
    cf_password?: string

}
export const useRegisterForm = () => {
    const message = 'Поле не долэно быть пустым '
    const schema = yup.object().shape({
        email: yup.string().email('Почта не валидна ').required(message),
        password: yup.string().required(message).min(6 , 'Минимум 6 символов'),
        username: yup.string().required(message).min(6 , 'Минимум 3 символов'),
        fullname: yup.string().required(message).min(6 , 'Минимум 6 символов'),
        cf_password: yup.string().required(message).min(6 , 'Минимум 6 символов')
        .oneOf([yup.ref("password"), null], "пароль не совпадает"),
    })
    const { register , handleSubmit  ,  watch , formState: {errors , isValid} } = useForm<RegisterFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            fullname: '',
            username: '',
            password: '',
            cf_password: '',
        }
    })

    return {
        register,
        handleSubmit,
        watch,
        RegisterFormNames,
        errors,
        isValid
    }
}