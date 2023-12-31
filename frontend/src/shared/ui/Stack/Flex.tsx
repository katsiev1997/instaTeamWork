import { type } from 'os'
import React , {ReactNode , FC} from 'react'
import cls from './Flex.module.scss'
import { Mods, classNames } from '@/shared/lib/classNames'


type DirectionType = 'row' | 'column'
type JustifyType = 'center' | 'end' | 'start' | 'between'
type AlignType = 'center' | 'end' | 'start'
type WrapType = 'wrap' | 'nowrap'
type GapType = 0 | 4 | 8 | 12 | 16 | 18 | 22 | 26 | 28 | 32 | 36 | 40
export interface FlexProps {
    children: ReactNode,
    direction?: DirectionType,
    justify?: JustifyType,
    align?: AlignType,
    wrap?: WrapType,
    gap?: GapType,
    max?: boolean,
    className?: string
}

export const Flex: FC<FlexProps> = (props) => {
    const { className ,  children , direction , align = 'center' , justify = 'start' , wrap = 'nowrap' ,  gap = 0 , max = false} = props

    const directionClasses: Record<DirectionType , string> = {
        column: cls.column,
        row: cls.row
    }
    const justifyClasses: Record<JustifyType , string> = {
        between: cls.between,
        center: cls.center,
        end: cls.end,
        start: cls.start
    }
    const alignClasses: Record<AlignType , string> = {
        center: cls.alignCenter,
        end: cls.alignEnd,
        start: cls.alignStart
    }
    const wrapClasses: Record<WrapType , string> = {
        wrap: cls.wrap,
        nowrap: cls.nowrap
    }
    const gapClasses: Record<GapType , string> = {
        0: cls.gap0,
        4: cls.gap4,
        8: cls.gap8,
        12: cls.gap12,
        16: cls.gap16,
        18: cls.gap18,
        22: cls.gap22,
        26: cls.gap26,
        28: cls.gap28,
        32: cls.gap32,
        36: cls.gap36,
        40: cls.gap40
    }

    const mods: Mods = {
        [cls.max]: max
    }
    const classes = [
        direction && directionClasses[direction],
        align && alignClasses[align],
        justify && justifyClasses[justify],
        gap && gapClasses[gap],
        wrap && wrapClasses[wrap],
        className

    ]

  return (
    <div className={classNames( cls.flex , {} , classes)}>
        {children}
    </div>
  )
}
