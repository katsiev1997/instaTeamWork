import { FC } from 'react'
import cls from './Text.module.scss'
import { classNames } from '@/shared/lib/classNames'

export type TextWeight = 200 | 400 | 500 | 600 | 700
export type TextSize = 12 | 14 | 18 | 22 | 28
export type TextColor = 'blue' | 'black' | 'gray'
export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

const sizeClasses: Record<TextSize, string> = {
  12: cls.size12,
  14: cls.size14,
  18: cls.size18,
  22: cls.size22,
  28: cls.size28,
}
const weightClasses: Record<TextWeight, string> = {
  200: cls.weight200,
  400: cls.weight400,
  500: cls.weight500,
  600: cls.weight600,
  700: cls.weight700,
}

const colorClasses: Record<TextColor, string> = {
  blue: cls.blue,
  gray: cls.gray,
  black: cls.black,
}

interface TextProps {
  className?: string
  children: string
  size: TextSize
  weight: TextWeight
  color: TextColor
  tag: TextTag
}

export const Text: FC<TextProps> = (props) => {
  const { className, children, size, weight, color, tag } = props
  const classes = [
    size && sizeClasses[size],
    weight && weightClasses[weight],
    color && colorClasses[color],
    className,
  ]
  const Tag = tag
  return <Tag className={classNames('', {}, classes)}>{children}</Tag>
}
