import React, { FC } from 'react'

import { Container } from './styles'

type TypeProps = {
    fullscreen?: boolean
}

const Loading: FC<TypeProps> = ({ fullscreen = false }) => {
    return (
        <Container fullscreen={fullscreen}>
            <h2>Carregando...</h2>
        </Container>
    )
}

export default Loading