import styled from "styled-components";

import { MdOutlineNavigateNext, MdOutlineChevronLeft,MdOutlineClose } from 'react-icons/md';


export const GallerySection = styled.section`
    position: absolute;
    top: 0%;
    right: 0%;
    z-index: 3;
    background-color: hsla(0, 0%, 0%, 0.75);
    width: 100%;
    height: 100%;
`

export const GalleryContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CloseIcon = styled(MdOutlineClose)`
    position: relative;
    top: 9%;
    right: -97.5%;
    font-size: 2rem;
    width: 1rem;
    height: 1rem;
    transform: scale(1.3);
    transform: scale(2);

    &:hover{
        fill: hsl(26, 100%, 55%);
        cursor: pointer;
    }
`

export const PrevIconContainer = styled.span`
    position: relative;
    white-space: nowrap;
    background-color: hsl(0, 0%, 100%);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    z-index: 4;

    top: 49%;
    right: 4%;
`

export const PrevIcon = styled(MdOutlineChevronLeft)`
    width: 1.2rem;
    height: 1.2rem;
    transform: scale(2);

    &:hover{
        fill: hsl(26, 100%, 55%);
        cursor: pointer;
    }
`

export const NextIconContainer = styled.span`
     position: relative;
    white-space: nowrap;
    background-color: hsl(0, 0%, 100%);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    z-index: 4;

    top: 43%;
    left: 96%;
`

export const NextIcon = styled(MdOutlineNavigateNext)`
    width: 1.2rem;
    height: 1.2rem;
    transform: scale(2);
    position: relative;
    right: -6%;

    &:hover{
        fill: hsl(26, 100%, 55%);
        cursor: pointer;
    }
`

export const CurrentImage = styled.img`
    width: 40rem;
    height: 40rem;
    border-radius: 10px;
`

export const ThumbnailImagesContainer = styled.div`
    width: 40rem;
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`

export const ThumbCont = styled.div`
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
`

export const ThumbnailImg = styled.div`
    width: 7rem;
    height: 7rem;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: cover;
    background-size: cover;
    border-radius: 10px;
    align-items: center;

    &:hover{
        opacity: .5;
    }
`