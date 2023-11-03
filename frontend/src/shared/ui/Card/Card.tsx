import { FC , ReactNode   } from 'react'
import cls from './Card.module.scss'
import { classNames } from '@/shared/lib/classNames'

interface CardProps {
    children: ReactNode,
    className?: string,
    marginTop?: marginTopTypes
}
type marginTopTypes = 50

export const Card: FC<CardProps> = ({children , marginTop ,  className = ''}) => {

    const MarginClasses: Record<marginTopTypes , string> = {
        50: cls.marginTop
    }
    const classes = [
        marginTop && MarginClasses[marginTop]
      ];
    return (
        <div className={classNames(cls.card , {} , classes)}>
            {children}
        </div>
    )

}