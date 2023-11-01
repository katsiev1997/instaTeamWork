import { classNames } from '@/shared/lib/classNames'
import React , {FC , ReactNode , FormHTMLAttributes} from 'react'
import cls from './Form.module.scss'
interface FormProps extends FormHTMLAttributes<HTMLFormElement> { 
    children?: ReactNode,
    className?: string
}

export const Form:FC<FormProps>  = ({children , className , ...rest}) => {
  return (
    <form className={classNames('' , {}  , [className])} {...rest}>
        {children}
    </form>
  )
}
