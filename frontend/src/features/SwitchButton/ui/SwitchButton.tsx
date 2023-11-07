import { Theme } from '@/shared/consts/theme'
import { useTheme } from '@/shared/hooks/useTheme'
import { Icon } from '@/shared/ui'

export const SwitchButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div onClick={toggleTheme}>
      {theme === Theme.DARK ? <Icon type="Dark" /> : <Icon type="Light" />}
    </div>
  )
}
