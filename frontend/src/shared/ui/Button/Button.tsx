import { FC } from 'react'
import cls from './Button.module.scss'

interface ButtonProps {
  children: string
  type: 'submit' | 'button'
  kind: 'default' | 'transparent'
}

export const ButtonFC: FC<ButtonProps> = (props) => {
  const {children, type = "submit", kind} = props
  return <button type={type}>
    {children}
  </button>
}
