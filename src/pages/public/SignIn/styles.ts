import { styled } from 'styled-components'

import backgroundImage from '../../../assets/background-signin.webp'

export const Container = styled.div`
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

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
        padding: 5rem;  
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