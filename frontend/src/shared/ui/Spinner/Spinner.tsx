import React from 'react'
import cls from './Spinner.module.scss'
import { classNames } from '@/shared/lib/classNames'

type sizeType = 's' | 'm' | 'l'

interface SpinnerProps {
  size?: sizeType
}

const sizeClasses: Record<sizeType, string> = {
  l: cls.sizeL,
  m: cls.sizeM,
  s: cls.sizeS
}

export const Spinner:React.FC<SpinnerProps> = ({size}) => {
  const classes = [
    size && sizeClasses[size]
  ] 
  
  return (
    <div className={classNames(cls.ldsRing,{}, classes)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
 