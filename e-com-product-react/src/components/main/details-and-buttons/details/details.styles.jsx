import styled from "styled-components";

export const DetailsCont = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 280px) and (max-width: 750px) {
        width: 90%;
        height: auto;
        margin: 1rem;
    }
`

export const SneakerHeading = styled.h3`
    color: hsl(26, 100%, 55%);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;

    @media (min-width: 280px) and (max-width: 750px) {
        width: 100%;
    }
`

export const LimitedHeading = styled.h1`
    color: hsl(220, 13%, 13%);
    font-size: 3rem;
    margin-top: 1rem;

    @media (min-width: 280px) and (max-width: 750px) {
        width: 100%;
    }
`

export const DescrParag = styled.p`
    line-height: 1.8rem;
    color: hsl(219, 9%, 45%);

    @media (min-width: 280px) and (max-width: 750px) {
        width: 100%;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 280px) and (max-width: 750px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
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

    @media (min-width: 280px) and (max-width: 750px) {
        margin: 0;
    }
`

export const OriginalPrice = styled.p`
    color: hsl(220, 14%, 75%);
    font-weight: bold;
    text-decoration: line-through;
`