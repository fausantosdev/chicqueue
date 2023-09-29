import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { BsEnvelope, BsKey, BsPerson, BsPhone } from 'react-icons/bs'

import { Input } from '../../../components/Input'

import { Button } from '../../../components/Button'

import { Card, Container } from './styles'

interface IFormValues {
    name: string
    phone: string
    username: string
    email: string
    password: string
}

const SignUp: FC = () => {  
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        phone: Yup.string().required('Telefone é obrigatório'),
        username: Yup.string().required('Nome de usuário é obrigatório'),
        email: Yup.string().email('Digite um email válido').required('E-mail é obrigatório'),
        password: Yup.string().min(6, 'No mínimo seis caracteres')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    })

    const submitForm = handleSubmit(async (data) => {
        console.log(data)
        /*try {
            const result = await api.post('/user', data)

            console.log(result)
        } catch (error) {
            
        }*/
    })

    return(
        <Container>
            <Card>
                <h2>Cadastre-se</h2>
                <form onSubmit={submitForm}>
                    <Input icon={<BsPerson size={20} color='272830'/>} placeholder='Nome completo' type='text' {...register('name', { required: true })} error={errors.name && errors.name.message} />
                    <Input icon={<BsPhone size={20} color='272830'/>} placeholder='Telefone' type='text' {...register('phone', { required: true })} error={errors.phone && errors.phone.message} />
                    <Input icon={<BsPerson size={20} color='272830'/>} placeholder='Apelido' type='text' {...register('username', { required: true })} error={errors.username && errors.username.message} />
                    <Input icon={<BsEnvelope size={20} color='272830'/>} placeholder='E-mail' type='text' {...register('email', { required: true })} error={errors.email && errors.email.message} />
                    <Input icon={<BsKey size={20} color='272830'/>} placeholder='Senha' type='password' {...register('password', { required: true })} error={errors.password && errors.password.message} />
                    <Button type='submit'>Cadastrar</Button>
                </form>
                <div className='register'>
                    <span>Já possui uma conta? <Link to={'/'}>Faça login</Link></span>
                </div>
            </Card>
        </Container>
    )
}

export default SignUp
