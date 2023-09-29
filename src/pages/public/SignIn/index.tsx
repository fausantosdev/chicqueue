import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../../components/Input'

import { Button } from '../../../components/Button'

import { useAuth } from '../../../contexts/Auth'

import { Container, Card } from './styles'

interface IFormValues {
    email: string
    password: string
}

const SignIn: FC = () => {
    const { signIn } = useAuth()

    const schema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido').required('E-mail é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    })

    const submitForm = handleSubmit(({ email, password }) => {
        signIn({ email, password })
    })

    return(
        <Container>
            <Card>
                <h2>Olá, seja bem vindo!</h2>
                <form onSubmit={submitForm}>
                    <Input icon={<FiMail size={20}/>} placeholder='E-mail' type='text' {...register('email', { required: true })} error={errors.email && errors.email.message} />
                    <Input icon={<FiLock size={20}/>}placeholder='Senha' type='password' {...register('password', { required: true })} error={errors.email && errors.email.message} />
                    <Button type='submit'>Entrar</Button>
                </form>
                <div className='register'>
                    <span>Ainda não tem uma conta? <Link to={'/sign-up'}>Cadastre-se</Link></span>
                </div>
            </Card>
        </Container>
    )
}

export default SignIn