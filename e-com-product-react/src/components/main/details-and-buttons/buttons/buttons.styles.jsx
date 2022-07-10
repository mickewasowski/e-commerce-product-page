import styled from "styled-components";

export const CartButtonsContainer = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const QuantityBtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: hsl(223, 64%, 98%);
    border-radius: 10px;
`

export const BtnSpan = styled.span`
    width: 4rem;
    height: 3.5rem;
    background-color: inherit;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(26, 100%, 55%);
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
    border: none;

    &:hover{
        cursor: pointer;
    }
`

export const QuantityInput = styled.input`
    border: none;
    background: none;
    width: 3.6rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: hsl(0, 0%, 0%);

    ${'' /* -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0; */}

    &:focus {
        outline: none;
    }
`

export const AddToCartImg = styled.img`
    position: relative;
    display: inline;
    right: -28%;
    top: 3px;
`

export const AddToCartBtn = styled.button`
    width: 19rem;
    height: 3.5rem;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: hsl(26, 100%, 55%);
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;

    &:hover{
        cursor: pointer;
        background-color: hsla(26, 100%, 55%, .7);
    }
`