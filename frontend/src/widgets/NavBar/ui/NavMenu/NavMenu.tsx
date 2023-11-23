import { Avatar, DropDown, Icon ,Text } from '@/shared/ui'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import cls from './NavMenu.module.scss'
import { LangSwitch } from '@/widgets/LangSwitch/ui/LangSwitch'
import { Theme } from '@/shared/consts/theme'
import { INavMenuItem } from '../../model/consts/navMenu'
import { classNames } from '@/shared/lib/classNames'
import { SwitchButton } from '@/features'
import { ThemeContext } from '@/app/providers'
import { MenuProps } from 'antd/es/menu'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useSelector } from 'react-redux'
import { getAuthData } from '@/entities/User'
export const NavMenu = () => {
  const { theme } = useContext(ThemeContext)

  const authData = useSelector(getAuthData);

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

  const dropDownItems: MenuProps['items'] = [
    {
      label: <Text>Fullname</Text>,
      key: "0"
    },
    {
      label: (
        <AppLink to={`/profile/${authData._id}`}>
          <Text >Профиль</Text>
        </AppLink>
      ),

      key: "1"
    },
    {
      label: 'Сменить тему',
      key: "2",
    },
    {
      label: 'Настройки',
      key: "3"
    },
    {
      label: 'Выйти',
      key: "4"
    }
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
          <DropDown items={dropDownItems} placement='bottomRight'>
            <Avatar />
          </DropDown>
          
        </li>
      </ul>
    </nav>
  )
}
