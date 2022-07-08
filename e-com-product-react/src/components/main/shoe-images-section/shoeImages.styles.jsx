import styled from "styled-components";

export const ShoeImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
`

export const MainImage = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 15px;

    &:hover{
        cursor: pointer;
    }
`

export const OtherImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
`

export const SmallImageContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;

    &:hover{
        outline: 3px solid hsl(26, 100%, 55%);
    }
`

export const SmallImage = styled.div`
    width: 100px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: cover;
    background-size: cover;
    border-radius: 10px;
    align-items: center;

    &:hover{
        opacity: .4;
        cursor: pointer;
    }
`