import styled from "styled-components";

export const CartListContainer = styled.div`
    position: absolute;
    width: 21rem;
    height: 14rem;
    top: 9%;
    right: 7%;
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.08);

    flex-direction: column;
`

export const CartHeadingCont = styled.div`
    height: 25%;
    border-bottom: 3px solid hsl(223, 64%, 98%);
`

export const CartHeading = styled.h3`
    ont-size: .9rem;
    margin-left: 1.5rem;
    color: hsl(220, 13%, 13%);
`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.1rem 0;
`

export const EmptyCardP = styled.p`
    text-align: center;
    color: hsl(219, 9%, 45%);
    font-weight: bold;
`

export const CheckoutBtn = styled.button`
    position: relative;
    top: 22%;
    border: none;
    padding: 1rem;
    width: 90%;
    align-self: center;
    border-radius: 10px;
    background-color: hsl(26, 100%, 55%);
    font-size: 1rem;
    font-weight: 700;
    color: hsl(0, 0%, 100%);
`