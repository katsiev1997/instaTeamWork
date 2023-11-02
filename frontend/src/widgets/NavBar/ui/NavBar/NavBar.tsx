import { FC } from 'react'
import cls from './NavBar.module.scss'
import { NavMenu } from '../'
import { NavSearch } from '../'
import Logo from '@/shared/assets/Logo.png'

const NavBar: FC = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.navbarWrap}>
          <div className={cls.logo}>
            <img src={Logo} />
          </div>
          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  )
}

export default NavBar
