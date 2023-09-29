import { FC, useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

import { Container, Content, ContentHeader, ContentBody, ContentFooter } from "./styles"

import { TypeSchedule } from "../../types/GlobalTypes"
import { getHours } from "date-fns"

type TypeProps = {
    isOpen: boolean
    setIsOpen: () => void
    data?: TypeSchedule
}

const ModalEdit: FC<TypeProps> = ({ isOpen, setIsOpen, data }) => {
    const [ schedule, setSchedule ] = useState<TypeSchedule | null>(null)
    
    useEffect(() => {
        if (data) {
            setSchedule(data)
        }
    }, [])

    const date = new Date(data!.date).toISOString().split('T')[0]

    const dateFormatted = new Date(data!.date)
    const hour = getHours(dateFormatted)

    if ( isOpen ) {
        return (
            <Container>
                <Content>
                    <ContentHeader>
                        <h2>Editar Horário</h2>
                        <AiOutlineClose size={25} onClick={setIsOpen} />
                    </ContentHeader>
                    <ContentBody>
                        <p>{hour} {schedule?.user.name}</p>
                        <div className="date">
                            <label htmlFor="">Indique uma nova data</label>
                            <input type="date" defaultValue={date} />
                        </div>
                        <div className="time">
                            <label htmlFor="">Indique um novo horário</label>
                            <select name="" id="">
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                                <option value="">12:00</option>
                            </select>
                        </div>
                    </ContentBody>
                    <ContentFooter>
                        <button className="cancel" onClick={setIsOpen}>Cancelar</button>
                        <button className="edit">Editar</button>
                    </ContentFooter>
                </Content>
            </Container>
        )
    } else {
        return
    }
}

export default ModalEdit