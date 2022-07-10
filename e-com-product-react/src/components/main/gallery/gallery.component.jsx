import { useState } from 'react';
import { GallerySection, GalleryContainer, CloseIcon, PrevIconContainer, PrevIcon, NextIconContainer, NextIcon, CurrentImage, ThumbnailImagesContainer, ThumbCont, ThumbnailImg } from './gallery.styles';


function GalleryComponent({toggle}){
    const [current, setCurrent] = useState(1);

    const selectedCont = {
        outline: "3px solid hsl(26,100%,55%)"
    }

    const selectedImg = {
        opacity: ".5",
        backgroundImage: `url(/images/image-product-${current}-thumbnail.jpg)`
    }

    const previous = () => {
        if (current - 1 < 1) {
            return;
        }else{
            setCurrent(current-1)
        }
    }

    const next = () => {
        if (current + 1 > 4) {
            return;
        }else{
            setCurrent(current+1)
        }
    }

    return(
            <GallerySection>
                <GalleryContainer>
                    <div className="current-image-container">
                        <CloseIcon color='white' onClick={toggle}/>
                        <PrevIconContainer>
                            <PrevIcon onClick={previous}/>
                        </PrevIconContainer>
                        <NextIconContainer>
                            <NextIcon onClick={next}/>
                        </NextIconContainer>
                        <CurrentImage src={`/images/image-product-${current}.jpg`} />
                    </div>
                    <ThumbnailImagesContainer>
                        <ThumbCont style={current === 1 ? selectedCont : {}}>
                            <ThumbnailImg
                                style={current === 1 ? selectedImg : {backgroundImage: "url(/images/image-product-1-thumbnail.jpg)"}}
                                onClick={() => setCurrent(1)}>
                            </ThumbnailImg>
                        </ThumbCont>
                        <ThumbCont style={current === 2 ? selectedCont : {}}>
                            <ThumbnailImg
                                style={current === 2 ? selectedImg : {backgroundImage: "url(/images/image-product-2-thumbnail.jpg)"}}
                                onClick={() => setCurrent(2)}>
                            </ThumbnailImg>
                        </ThumbCont>
                        <ThumbCont style={current === 3 ? selectedCont : {}}>
                            <ThumbnailImg
                                style={current === 3 ? selectedImg : {backgroundImage: "url(/images/image-product-3-thumbnail.jpg)"}}
                                onClick={() => setCurrent(3)}>
                            </ThumbnailImg>
                        </ThumbCont>
                        <ThumbCont style={current === 4 ? selectedCont : {}}>
                            <ThumbnailImg
                                style={current === 4 ? selectedImg : {backgroundImage: "url(/images/image-product-4-thumbnail.jpg)"}}
                                onClick={() => setCurrent(4)}>
                            </ThumbnailImg>
                        </ThumbCont>
                    </ThumbnailImagesContainer>
                </GalleryContainer>
            </GallerySection>
    )
}

export default GalleryComponent;