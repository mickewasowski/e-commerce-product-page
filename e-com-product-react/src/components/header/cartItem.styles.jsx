import styled from "styled-components";

export const CartItemCont = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    width: 90%;
    height: 3rem;
`

export const ImageThumbnailCont = styled.div`
    width: 55px;
    height: 55px;
`

export const ItemImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 7px;
`

export const ItemDetailsCont = styled.div`
padding: 0 .8rem;
    line-height: 1.8;
`

export const ItemHeading = styled.h5`
    margin: 0;
    text-align: left;
    color: hsl(219, 9%, 45%);
    font-weight: 300;
    align-self: flex-start;
    font-size: .9rem;
`

export const ItemPrice = styled.h5`
    margin: 0;
    text-align: left;
    color: hsl(219, 9%, 45%);
    font-weight: 300;
    align-self: flex-start;
    font-size: 1rem;
`

export const BoldTotal = styled.strong`
    color: hsl(220, 13%, 13%);
`

export const DeleteIconCont = styled.div`
    padding-left: 10px;

    &:hover{
        cursor: pointer;
    }
`