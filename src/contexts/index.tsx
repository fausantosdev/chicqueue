import React, { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css' 

import { AuthProvider } from './Auth'
import { MyThemeProvider } from './Theme'

interface IProps {
  children: JSX.Element
}

const AppProvider: FC<IProps> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <MyThemeProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </MyThemeProvider>
    </>
  )
}

export default AppProvider