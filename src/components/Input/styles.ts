import { styled } from 'styled-components'

export const Container = styled.button`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    margin-bottom: 1.5rem;
    border: none;
    position: relative;
    border-radius: 30px;

    i {
        position: absolute;
        padding-left: .5rem;
        left: 0;
        display: flex;
        align-items: center;
    }

    input {
        width: 100%; 
        padding: .3rem 2.1rem;   
        font-size: 1rem;
        border: 1px solid var(--gray-50);
        background-color: var(--white);
        border-radius: 10px;
    }

    span {
        color: #d80303;
        position: absolute;
        bottom: 100%;
    }
`