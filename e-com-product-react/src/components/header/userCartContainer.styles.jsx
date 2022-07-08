import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

export const UserCartContainer = styled.div`
    width: 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CartButton = styled.button`
    margin-right: 40px;
    border: none;
    background-color: transparent;

    &:hover{
        cursor: pointer;
    }
`;

export const CartIcon = styled(BsCart3)`
    transform: scale(1.5);
`;

export const CartCount = styled.p`
    width: 25px;
    height: 16px;
    position: relative;
    top: -17%;
    right: -32%;
    background-color: hsl(26, 100%, 55%);
    text-align: center;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 700;
    color: hsl(0, 0%, 100%);
    padding: .2rem .3rem;
`;




export const UserIconContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;

    &:hover{
        outline: 3px solid hsl(26, 100%, 55%);
        cursor: pointer;
    }
`;

export const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`