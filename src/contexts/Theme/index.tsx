import React, { FC, createContext, useContext, useState} from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'

import GlobalStyle from '../../styles/global'

interface IThemeContext {
    theme: string
    setTheme: (theme: 'dark' | 'light') => void
}

type MyProviderPropType = {
    children: JSX.Element
}

const ThemeContext = createContext<IThemeContext>(null!)

const MyThemeProvider: FC<MyProviderPropType> = ({ children }) => { 
    const [ theme, setTheme ] = useState<'dark' | 'light'>('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={themes[theme]}>
                <GlobalStyle/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = (): IThemeContext => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used withing an ThemeProvider')
    }

    return context
}

export {
    MyThemeProvider,
    useTheme
}