import styled from "styled-components";

import { MdOutlineNavigateNext, MdOutlineChevronLeft } from 'react-icons/md';

export const ShoeImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;

    @media (min-width: 280px) and (max-width: 768px) {
        width: 100%;
    }
`

export const MainImgContainer = styled.div`
    width: 100%;
    height: auto;

    @media (min-width: 280px) and (max-width: 768px) {
        width: 100vw;
        height: 25rem;
    }
`

export const MainImage = styled.img`
    width: 500px;
    border-radius: 15px;

    &:hover{
        cursor: pointer;
    }

    @media (min-width: 280px) and (max-width: 768px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`

export const LetfIconContainer = styled.div`
    display: none;


    @media (min-width: 280px) and (max-width: 768px) {
        margin: 0;
        width: 7%;
        height: 7%;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -57%;
        right: -1%;
        background-color: white;
        border-radius: 50%;
    }
`

export const LeftIcon = styled(MdOutlineChevronLeft)`
    display: none;

    @media (min-width: 280px) and (max-width: 768px) {
        transform: scale(2);
        display: inline-block;
    }
`

export const RightIconContainer = styled.div`
    display: none;

    @media (min-width: 280px) and (max-width: 768px) {
        margin: 0;
        width: 7%;
        height: 7%;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -64%;
        left: 82%;
        background-color: white;
        border-radius: 50%;
    }
`

export const RightIcon = styled(MdOutlineNavigateNext)`
    display: none;

    @media (min-width: 280px) and (max-width: 768px) {
        transform: scale(2);
        display: inline-block;
    }
`

export const OtherImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;

    @media (min-width: 280px) and (max-width: 768px) {
        display: none;
    }
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