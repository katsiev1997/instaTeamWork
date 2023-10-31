import { FC } from 'react'
import cls from './Text.module.scss'

export type TextWeight = 200 | 400 | 500 | 600 | 700
export type TextSize = 12 | 14 | 18 | 22 | 28
export type TextColor = 'blue' | 'black' | 'gray'
export type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p"

const sizeClasess: Record<TextSize, string> = {
  12: cls.size12,
  14: cls.size14,
  18: cls.size18,
  22: cls.size22,
  28: cls.size28,
}
const weightClasess: Record<TextWeight, string> = {
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
  children: string
  size: TextSize
  weight: TextWeight
  color: TextColor
  tag: TextTag
}

export const Text: FC<TextProps> = (props) => {
  const { children, size, weight, color, tag } = props
  const Tag = tag
  return <Tag>{children}</Tag>
}