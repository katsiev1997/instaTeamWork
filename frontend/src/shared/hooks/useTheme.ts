import { ThemeContext } from '@/app/providers'
import { Theme } from '../consts/theme'
import { useContext } from 'react'

interface IUseTheme {
  theme: string
  toggleTheme: () => void
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme === Theme.DARK) {
      setTheme?.(Theme.LIGHT)
    } else {
      setTheme?.(Theme.DARK)
    }
  }
  return { toggleTheme, theme }
}
