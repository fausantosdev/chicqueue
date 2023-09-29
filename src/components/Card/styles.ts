import { styled } from 'styled-components'

type PropTypes = {
    isAfter: boolean
}

export const Container = styled.div<PropTypes>`
    display: flex;
    background: var(--white);
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.1);  
    margin-bottom: 1.5rem;

    div {
        display: flex;
        align-items: center;

        p {
            color: var(--primary);
            font-size: 1.2rem;
        }

        span {
            background: ${props => props.isAfter ? 'var(--gray-100)' : 'var(--secondary)'};
            color: var(--white);
            border-radius: 8px 0 0 8px;
            padding: .8rem;
            margin-right: 1rem;
        }
    }
`

export const Actions = styled.div`
    margin-right: .5rem;

    svg {
        margin-right: .5rem;
        cursor: pointer;
    }

    svg:hover {
        transform: scale(1.2);
        transition: all ease-in .1s;
    }
`