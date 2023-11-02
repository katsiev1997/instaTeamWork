import { Icon } from '@/shared/ui'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import User from '@/shared/assets/User.png'
import cls from './NavMenu.module.scss'

export const NavMenu: FC = () => {
  const [ theme, setTheme ] = useState<boolean>(false)

  return (
    <div className={cls.navMenu}>
      <div onClick={() => setTheme(!theme)} className="theme">
        <Icon  type={theme ? "Dark" : "Light"} />
      </div>
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
      <img src={User} alt="" />      
    </div>
  )
}
