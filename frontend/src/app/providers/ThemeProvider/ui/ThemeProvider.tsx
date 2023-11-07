import { LOCAL_STORAGE_THEME } from '@/shared/consts/localStorage'
import { Theme } from '@/shared/consts/theme'
import {
  createContext,
  ReactNode,
  FC,
  useState,
  useMemo,
  useEffect,
} from 'react'

interface IThemeContext {
  children: ReactNode
}

interface IThemeValues {
  theme?: string
  setTheme?: (theme?: Theme) => void
}

export const ThemeContext = createContext<IThemeValues>({})

export const ThemeProvider: FC<IThemeContext> = ({ children }) => {
  const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Theme
  const initialState = fallbackTheme || Theme.LIGHT
  const [theme, setTheme] = useState<Theme>(initialState)
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME, theme)
  }, [theme])
  const defaultTheme = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
