import {ShoeImagesContainer, MainImage, OtherImagesContainer, SmallImageContainer, SmallImage} from './shoeImages.styles';

function ShoeImagesSection(){

    return(
        <ShoeImagesContainer>
                <div className="main-image">
                    <MainImage src="/images/image-product-1.jpg" />
                </div>
                <OtherImagesContainer>
                    <SmallImageContainer>
                        <SmallImage style={{backgroundImage: "url(/images/image-product-1-thumbnail.jpg)"}}></SmallImage>
                    </SmallImageContainer>
                    <SmallImageContainer>
                        <SmallImage style={{backgroundImage: "url(/images/image-product-2-thumbnail.jpg)"}}>
                        </SmallImage>
                    </SmallImageContainer>
                    <SmallImageContainer>
                        <SmallImage style={{backgroundImage: "url(/images/image-product-3-thumbnail.jpg)"}}>
                        </SmallImage>
                    </SmallImageContainer>
                    <SmallImageContainer>
                        <SmallImage style={{backgroundImage: "url(/images/image-product-4-thumbnail.jpg)"}}>
                        </SmallImage>
                    </SmallImageContainer>
                </OtherImagesContainer>
        </ShoeImagesContainer>
    )
}

export default ShoeImagesSection;