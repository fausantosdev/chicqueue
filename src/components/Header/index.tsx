import React, { FC, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../contexts/Auth'

import styles from './Header.module.css'

import logo from '../../assets/salon.webp'
import { Container, DropDownMenu } from './styles'

const Header: FC = () => {
    const navigate = useNavigate()
    const { signOut } = useAuth()

    const [ openMenu, setOpenMenu ] = useState(false) 

    return(
        <Container>
            <div className='left' onClick={() => navigate('/dashboard')}>
                <img src={logo} alt='Chiqueue' />
                <h1>Chiqueue</h1>
            </div>
            <div className='right' onClick={() => setOpenMenu(!openMenu)}>
                <CgProfile size={18}/>
                <span onClick={() => openMenu!}>Perfil</span>
                <DropDownMenu isOpen={openMenu}>
                    <ul>
                        <li>Agendamentos</li>
                        <li>Editar Perfil</li>
                        <li onClick={signOut}>Sair</li>
                    </ul>
                </DropDownMenu>
            </div>
        </Container>
    )
}

export default Header