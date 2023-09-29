import { styled } from 'styled-components'

type TypemenuProps = {
    isOpen: boolean
}

export const Container = styled.div`
    background: var(--primary);
    display: flex;
    /*border: 1px solid red;*/
    justify-content: space-between;
    padding: 1rem;  
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    
    .left, .right {
        display: flex;
        align-items: center;
        /*border: 1px solid red;*/
        flex: 1;
        justify-content: center;
    }

    .left img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        cursor: pointer;
    }

    .left h1 {
        color: var(--white);
        font-size: 20px;
        cursor: pointer;
    }

    .right {
        position: relative;
    }

    .right span {
        cursor: pointer;
    }

    .right svg {
        margin-right: 5px;
        color: var(--white);
    }

    @media (min-width: 700px) {
        flex-direction: row;

        .left{
            justify-content: flex-start;
        }

        .right {
            justify-content: flex-end;
        }
    }
`

export const DropDownMenu= styled.div<TypemenuProps>`
    position: absolute;
    background: var(--primary);
    top: 33px;
    right: 0;
    list-style: none;
    border-radius: 10px;
    display: ${props => props.isOpen ? 'block' : 'none'};
    color: var(--white);
    width: 100%;

    ul {
        list-style: none;
    }

    ul li {
        padding: .5rem 1rem;
        transition: all ease-in .2s;
        cursor: pointer;
    }

    ul li:hover {
        background: #64a2a4;
        
    }

    ul li:first-child:hover {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    ul li:last-child:hover {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`