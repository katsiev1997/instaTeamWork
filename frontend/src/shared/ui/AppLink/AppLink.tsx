import { classNames } from '@/shared/lib/classNames'
import { type FC, type ReactNode } from 'react'
import { NavLink, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

type AppLinkVariant = 'blue'

type AppLinkProps = {
  className?: string
  children: ReactNode,
  variant?: AppLinkVariant,
} & LinkProps

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className = '', variant , ...rest } = props

  
  const variantClasses: Record<AppLinkVariant, string> = {
    blue: cls.blue,
  };

  const classes = [variant && variantClasses[variant], className];

  return (
      <NavLink
        to={to}
        className={classNames(cls.appLink, {}, classes)}
        {...rest}
      >
          {children}
      </NavLink>
  )
}