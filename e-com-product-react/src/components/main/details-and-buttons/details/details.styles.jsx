import styled from "styled-components";

export const DetailsCont = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const SneakerHeading = styled.h3`
    color: hsl(26, 100%, 55%);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
`

export const LimitedHeading = styled.h1`
    color: hsl(220, 13%, 13%);
    font-size: 3rem;
    margin-top: 1rem;
`

export const DescrParag = styled.p`
    line-height: 1.8rem;
    color: hsl(219, 9%, 45%);
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CurrentPriceCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const DiscountedPrice = styled.p`
    margin-right: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: hsl(220, 13%, 13%);
`

export const DiscountAmount = styled.p`
    margin-right: 1.5rem;
    color: hsl(26, 100%, 55%);
    font-size: 1.2rem;
    font-weight: bold;
    padding: 3px 7px;
    background-color: hsl(25, 100%, 94%);
    border-radius: 5px;
`

export const OriginalPriceCont = styled.div`
    margin-top: 1rem;
`

export const OriginalPrice = styled.p`
    color: hsl(220, 14%, 75%);
    font-weight: bold;
    text-decoration: line-through;
`