import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

export enum LoginFormNames {
    EMAIL = 'email',
    PASSWORD = 'password',
}
export interface LoginFormValues {
    email?: string,
    password?: string
}
export const useLoginForm = () => {
    const message = 'Поле не долэно быть пустым '
    const schema = yup.object().shape({
        email: yup.string().email('Почта не валидна ').required(message),
        password: yup.string().required(message).min(6 , 'Минимум 6 символов')
    })
    const { register , handleSubmit  ,  watch , formState: {errors , isValid} } = useForm<LoginFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    return {
        register,
        handleSubmit,
        watch,
        LoginFormNames,
        errors,
        isValid
    }
}