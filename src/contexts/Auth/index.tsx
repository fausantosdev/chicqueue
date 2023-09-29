import React, { FC, createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from "axios"
import { toast } from "react-toastify"

import { TypeUser, TypeLogin } from "../../types/GlobalTypes"

import { useApi } from "../../hooks/useApi"

import Loading from "../../components/Loading"

interface IAuthContext {
    user: TypeUser | null
    signIn: (credentials: TypeLogin) => void//Promise<TypeResponse>
    signOut: () => void
    getToken: () => string | null
}

type TypeProviderProps = {
    children: JSX.Element
}

const AuthContext = createContext({} as IAuthContext)

const AuthProvider: FC<TypeProviderProps> = ({ children }) => {
    const api = useApi()
    const navigate = useNavigate()

    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState(null)

    const signIn = async ({ email, password }: TypeLogin) => {
        try {
            setLoading(true)

            const response = await api.signIn({ email, password })
            
            const { status, data, message } = response
    
            if (status) {
                setUser(data.user)
                setToken(data.token)
                navigate('/dashboard')
                toast.success(`Seja bem vindo, ${data.user.username}`)
            } else {
                toast.warn(message)
            }

            setLoading(false)

        } catch (error: any) {
            if(isAxiosError(error)) {
                toast.error(error.response?.data.message)
                return
            }

            setLoading(false)
        }
    }
    
    const signOut = async () => {
        setLoading(true)

        try {
            const token = getToken()

            if (token) {
        //        const response = await api.logOut(token)
        
        //        const { status, message } = response
        
        //        if(!status){
        //            alert(`Error: ${message}`)
        //            return false
        //        }
        
                removeToken()
                setUser(null)
        //        return true
            }

        } catch (error) {
            alert(error)
            return
        } finally {
            setLoading(false)
            //document.location.reload()
        }
    }

    const validateToken = async () => {
        const token = getToken()
        
        if (token) {
            setLoading(true)

            try {
                const response = await api.refreshToken(token)

                const { status, data, message } = response
    
                if(!status) {
                    alert(`Oops! ${message}`)
                    setLoading(false)
                    return
                }
 
                const { newToken, user } = data
    
                setUser(user)
                setToken(newToken)

            } catch (error: any) {
                if(isAxiosError(error)) {
                    toast.error(error.response?.data.message)
                    return
                }

                toast.error(error.message)
            } finally {
                setLoading(false)
            }

            //setLoading(false)    
        }
    }

    useEffect(() => {
        validateToken()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, getToken }}>
            {loading ? <Loading fullscreen/> : children}
        </AuthContext.Provider>
    )
}

const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used withing an AuthProvider')
    }

    return context
}

const getToken = () => {
    return localStorage.getItem('@3fee64097a7f9d67021d1e9be400ea0b')
}

const setToken = (token: string) => {
    localStorage.setItem('@3fee64097a7f9d67021d1e9be400ea0b', token)
}

const removeToken = () => {
    localStorage.removeItem('@3fee64097a7f9d67021d1e9be400ea0b')
}

export {
    AuthProvider, useAuth
}