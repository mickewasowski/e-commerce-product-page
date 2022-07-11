import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5rem 3rem 0 3rem;

    @media (min-width: 280px) and (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        width: 100vw;
    }
`