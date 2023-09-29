import React, { FC, useEffect, useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { isToday, format } from 'date-fns'
import 'react-day-picker/dist/style.css'

import { useAuth } from '../../../contexts/Auth'
import { useApi } from '../../../hooks/useApi'

import Header from '../../../components/Header'
import Card from '../../../components/Card'

import { Container, BoxLeft, BoxRight, Content, Info, Calendar } from './styles'

interface ISchedule {
    id: number
	date: string
	user: {
		name: string
		phone: string
	}
    createdAt: string
	updatedAt: string
}

const Dashboard: FC = () => {
    const { user, getToken } = useAuth()
    const { getSchedules } = useApi()

    const [ date, setDate ] = useState(new Date())
    const [ schedulesList, setSchedulesList ] = useState<Array<ISchedule>>([])

    const isWeekend = (date: Date) => {
        const day = date.getDay()

        return day === 0 || day === 6
    }

    const isWeekDay = (date: Date) => {
        const day = date.getDay()

        return day !== 0 && day !== 6
    }

    const handleDataChange = (date: Date) => {
        setDate(date)
    }

    const handleGetSchedules = async (date: Date) => {
        const token = getToken()

        const result = await getSchedules({ token: token!, date })

        setSchedulesList(result.data)        
    }

    useEffect(() => {
        handleGetSchedules(date)
    }, [date])

    return(
        <Container>
            <Header />
            <Info>
                <h2>Bem vindo(a), {user?.username}</h2>
                <p>Esta é sua lista de horários {isToday(date) && <span>de hoje, </span>} dia {format(date, 'dd/MM/yyy')}</p>
                <h2 className="nextSteps">Próximos horários</h2>
            </Info>
            <Content>
                <BoxLeft>
                    {schedulesList.map((schedule, index) => (
                        <Card key={index} data={schedule}/>
                    ))}
                </BoxLeft>

                <BoxRight>
                    <Calendar
                        className="calendar"
                        classNames={{
                            day: "calendarDay"
                        }}
                        selected={date}
                        modifiers={{
                            availables: isWeekDay
                        }}
                        modifiersClassNames={{
                            selected: "selected",
                            disabled: "disabled"
                        }}
                        mode="single"
                        disabled={isWeekend}
                        onDayClick={handleDataChange}
                        locale={ptBR}
                        fromMonth={new Date()}/>
                </BoxRight>  
            </Content>
        </Container>
    )
}

export default Dashboard