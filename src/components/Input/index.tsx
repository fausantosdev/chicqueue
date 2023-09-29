import React, { FC, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { Container } from './styles'

interface IInput {
    placeholder: string
    type: 'text' | 'password' | 'data'
    error?: string
    icon?: ReactNode
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = ({ placeholder, error, icon, ...rest }, ref) => {
    return (
        <Container>
            {
                icon && (
                    <i aria-hidden='true'> 
                        {icon}
                    </i>
                )
            }
            <input placeholder={placeholder} ref={ref} {...rest} />    
            {error && <span>{error}</span>}
        </Container>
    )
}

export const Input = forwardRef(InputBase)