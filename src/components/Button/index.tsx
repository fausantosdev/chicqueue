import React, { FC, ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type TypeProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<TypeProps> = (props) => {
    return(
        <Container type='button' {...props}>
            <span>{props.children}</span>
        </Container>
    )
}