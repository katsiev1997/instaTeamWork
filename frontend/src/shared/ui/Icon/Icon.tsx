import React , {FC} from 'react'
import cls from './Icon.module.scss'
import { IconName, IconType } from './IconName'

interface IconProps {
    type: IconType
    className?: string 
}

export const Icon: FC<IconProps> =  ( { type , className }) => {
  return (
    <div className={cls.icon}>
        {IconName[type]}
    </div>
  )
}
