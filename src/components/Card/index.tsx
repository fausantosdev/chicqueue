import React, { FC, useState } from 'react'
import { getHours, isAfter } from 'date-fns'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'

import { useAuth } from '../../contexts/Auth'

import { Container, Actions } from './styles'

import ModalEdit from '../ModalEdit'


import { TypeSchedule } from '../../types/GlobalTypes'

type TypeProps = {
    data: TypeSchedule
}

const Card: FC<TypeProps> = ({ data }) => {
    const { getToken } = useAuth()

    const { id, date, user, createdAt, updatedAt } = data

    const [ openModal, setOpenModal ] = useState(false)

    const [ schedule, setSchedule ] = useState<TypeSchedule | null>(null)

    const isAfterDate = isAfter(new Date(date), new Date()) 

    const dateFormatted = new Date(date)
    const hour = getHours(dateFormatted)

    let phoneFormatted = user.phone.replace('/\D/g', '')
    phoneFormatted = phoneFormatted.replace(
        '/(\d{2})(\d{5})(\d{4})/',
         `($1) $2-$3`
    )

    const handleGetSchedule = async () => {
        setSchedule(data)
    }

    return(
        <>
            <Container isAfter={!isAfterDate}>
                <div>
                    <span>{hour}</span>
                    <p>{user.name} - {phoneFormatted}</p>
                </div>
                <Actions>
                    <AiOutlineEdit color='#5f68b1' size={20} onClick={() => [handleGetSchedule(), setOpenModal(!openModal)]}/>
                    <RiDeleteBinLine color='#eb2e2e' size={20} />
                </Actions>
            </Container>
            {schedule && <ModalEdit isOpen={openModal} setIsOpen={() => setOpenModal(false)} data={schedule!} />}
        </> 
    )
}

export default Card