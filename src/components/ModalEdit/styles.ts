import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    z-index: 999;
`

export const Content = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    background: var(--white);
    border-radius: 16px;
`

export const ContentHeader = styled.div`
    background: var(--primary);
    border-radius: 16px 16px 0 0;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    h2 {
        margin: 0 !important;
    }

    svg {
        cursor: pointer;
    }
`

export const ContentBody = styled.div`
    padding: 1rem 2rem;

    p {
        color: var(--secondary);
        font-size: 1.5rem;
        margin-bottom: .8rem;
    }

    .date, .time {
        color: var(--primary);
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
    }

    .date>input {
        border: 1px solid var(--primary);
        border-radius: 10px;
        width: 40%;
        padding: .3rem;
        color: var(--primary);
    }

    .time>select {
        border: 1px solid var(--primary);
        border-radius: 10px;
        width: 40%;
        padding: .3rem;
        color: var(--primary);
    }
`

export const ContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 2rem 2rem;

    .cancel, .edit {
        cursor: pointer;
        text-decoration: none;
        font-weight: 300px;
        border-radius: 16px;
        padding: 0.3rem 1.5rem;
        width: 30%;
        transition: all ease-in .1s;
    } 

    .cancel {
        border: 1px solid var(--secondary);
        background: none;
        color: var(--secondary);
    }

    .cancel:hover {
        background: var(--gray-50);
    }

    .edit {
        border: 1px solid var(--secondary);
        background: var(--secondary);
        color: var(--white);
    }

    .edit:hover {
        background: var(--secondary-50);
    }

`