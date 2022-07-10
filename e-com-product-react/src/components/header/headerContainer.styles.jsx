import styled from 'styled-components'

export const Header = styled.header`
    height: 5rem;
    margin: 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 3px solid hsl(223, 64%, 98%);
    display: flex;
    justify-content: space-between;

    @media (min-width: 280px) and (max-width: 750px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
`