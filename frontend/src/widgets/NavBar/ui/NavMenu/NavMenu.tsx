import { Avatar, Icon } from '@/shared/ui'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import cls from './NavMenu.module.scss'
import { LangSwitch } from '@/widgets/LangSwitch/ui/LangSwitch'
import { Theme } from '@/shared/consts/theme'
import { INavMenuItem } from '../../model/consts/navMenu'
import { classNames } from '@/shared/lib/classNames'
import { SwitchButton } from '@/features'
import { ThemeContext } from '@/app/providers'

export const NavMenu = () => {
  const { theme } = useContext(ThemeContext)

  const NavMenuItems: INavMenuItem[] = [
    {
      href: '/',
      iconType: 'Home',
    },
    {
      href: '/messenger',
      iconType: 'Messenger',
    },
    {
      iconType: 'NewPosts',
    },
    {
      href: '/explore',
      iconType: 'FindPeople',
    },
    {
      href: '/',
      iconType: 'Favorite',
    },
  ]
  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {NavMenuItems.map((item) => (
          <li
            key={item.iconType}
            className={classNames(
              cls.item,
              { [cls.dark]: theme === Theme.DARK },
              []
            )}
          >
            {item.href ? (
              <Link to={item.href}>
                <Icon type={item.iconType} />
              </Link>
            ) : (
              <Icon type={item.iconType} />
            )}
          </li>
        ))}
        <li
          className={classNames(
            cls.item,
            { [cls.dark]: theme === Theme.DARK },
            []
          )}
        >
          <SwitchButton />
        </li>
        <li>
          <LangSwitch/>
        </li>
        <li>
          <Avatar />
        </li>
      </ul>
    </nav>
  )
}
