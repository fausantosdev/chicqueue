import { styled } from "styled-components"
import { DayPicker } from "react-day-picker"

export const Container = styled.div`
    background: var(--gray-50);
    display: flex;
    flex-direction: column;
    /*border: 1px solid red;*/
    width: 100%;
    max-width: 1200px;
    margin: auto;

    h2 {
        color: var(--white);
        font-style: normal;
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    .register {
        color: var(--white);
        font-weight: 300;
        font-size: .8rem;
        margin-top: 1rem;
    }

    @media (min-width: 900px) {
        justify-content: end;
        padding: 1rem;  
    }
`

export const Card = styled.div`
    background-color: var(--gray-100);
    box-shadow: 4px 8px 4px rgb(0,0,0,0.5);
    border-radius: 24px;
    padding: 3rem;
    text-align: center;
    height: fit-content;
`

export const Info = styled.div`
    margin-top: 1em;

    h2, p {
        color: var(--primary);
    }

    h2 {
        margin-bottom: 0;
    }

    .nextSteps {
        margin-top: 1rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column-reverse;
    /*border: 1px solid red;*/

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

export const BoxLeft = styled.div`
    flex: 1;
`

export const BoxRight = styled.div`
    display: flex;
    justify-content: center;
    /*border: 1px solid red;*/
`

export const Calendar = styled(DayPicker)`
    background: var(--primary);
    height: fit-content;
    padding: 1rem;
    border-radius: 10px;
    columns: var(--white);
    box-shadow: 4px 4px 4px rgba(0,0,0,0.2);

    .calendarDay {
        width: 40px;
        height: 40px;
        color: var(--black);
        margin: 0.15rem;
        border-radius: 5px;
    }

    .calendarDay:not(.disabled) {
        background: var(--white);
    }

    .calendarDay.disabled {
        background: var(--gray-200);
    }

    .selected {
        color: var(--white);
        background-color: var(--secondary) !important;
    }
`