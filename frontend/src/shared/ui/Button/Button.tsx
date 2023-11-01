import { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  addOnLeft?: JSX.Element
  addOnRight?: JSX.Element
  className?: string
  variant?: 'default' | 'transparent'
  children: ReactNode
  max?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, variant = 'default', addOnLeft, addOnRight, loading, disabled, max = true } = props
  const Variant = variant
  return (
    <button
      className={classNames(
        cls.btn,
        { [cls.transparent]: variant === 'transparent', [cls.disabled]: disabled, [cls.max]: max },
        [className, cls.default]
      )}
    >
      {addOnLeft}
      {loading ? <div>Loading...</div> : children}
      {addOnRight}
    </button>
  )
}
