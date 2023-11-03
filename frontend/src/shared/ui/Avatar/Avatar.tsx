import React , {FC , ReactNode  } from 'react'
import cls from './Avatar.module.scss'
import { classNames } from '@/shared/lib/classNames'

type AvatarSize = 22 | 32 | 56 | 150
type AvatarVariant = 'default' | 'stories'

interface AvatarProps  {
    size?: AvatarSize,
    className?: string,
    variant?: AvatarVariant,
    src?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {className = ''  , size = 32 , variant = 'default' , src } = props

    const VariantClasses: Record<AvatarVariant , string>  = {
        default: cls.default,
        stories: cls.stories
    }
    const SizeClasses: Record<AvatarSize , string> = {
        22: cls.size22,
        32: cls.size32,
        56: cls.size56,
        150: cls.size150
    }
    const classes = [
        size && SizeClasses[size],
        variant && VariantClasses[variant],
        className
    ]

    return (
        <div className={classNames(cls.avatar , {} , classes)}>
            {src ? <img src={src} alt="" /> : "In"}
        </div>
    )
}