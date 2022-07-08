import {DetailsCont, SneakerHeading, LimitedHeading, DescrParag, PriceContainer, CurrentPriceCont, DiscountedPrice, DiscountAmount, OriginalPriceCont, OriginalPrice} from './details.styles';

function DetailsContainer(){

    return(
        <DetailsCont>
            <div className="headings">
                <SneakerHeading>Sneaker Company</SneakerHeading>
                <LimitedHeading>Fall Limited Edition Sneakers</LimitedHeading>
            </div>
            <div className="description">
                <DescrParag>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
                </DescrParag>
            </div>
            <PriceContainer>
                <CurrentPriceCont>
                    <DiscountedPrice>$125.00</DiscountedPrice>
                    <DiscountAmount>50%</DiscountAmount>
                </CurrentPriceCont>
                <OriginalPriceCont>
                    <OriginalPrice>$250.00</OriginalPrice>
                </OriginalPriceCont>
            </PriceContainer>
        </DetailsCont>
    )
}

export default DetailsContainer;