import { FC, useContext } from 'react'
import cls from './NavBar.module.scss'
import { NavMenu } from '../NavMenu/NavMenu' 
import { NavSearch } from '../NavSearch/NavSearch'
import Logo from '@/shared/assets/Logo.png'
import { ThemeContext } from '@/app/providers'
import { Theme } from '@/shared/consts/theme'

export const NavBar: FC = () => {
  const {theme} = useContext(ThemeContext)  
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <div className={cls.logo}>
            <img className={theme === Theme.DARK && cls.dark } src={Logo} alt='' />
          </div>
          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  )
}

