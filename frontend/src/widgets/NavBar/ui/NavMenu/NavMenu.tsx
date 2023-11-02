import { Icon } from '@/shared/ui'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import cls from './NavMenu.module.scss'

export const NavMenu: FC = () => {
  return (
    <div className={cls.navMenu}>
      <Link to="/">
        <Icon type="Home" />
      </Link>
      <Link to="/messenger">
        <Icon type="Messenger" />
      </Link>
        <Icon type="NewPosts" />
      <Link to="/explore">
        <Icon type="FindPeople" />
      </Link>
      <Icon type="Favorite" />
    </div>
  )
}
