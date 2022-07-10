import { useState } from 'react';
import {ShoeImagesContainer, MainImage, OtherImagesContainer, SmallImageContainer, SmallImage} from './shoeImages.styles';

import GalleryComponent from '../gallery/gallery.component';

function ShoeImagesSection(){
    const [selected, setSelected] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const toggleGallery = () => {
        if (isOpen) {
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }

    return(
        <>
            <ShoeImagesContainer>
                    <div className="main-image">
                        <MainImage src={`/images/image-product-${selected}.jpg`} onClick={toggleGallery}/>
                    </div>
                    <OtherImagesContainer>
                        <SmallImageContainer style={selected === 1 ? {outline: "3px solid hsl(26,100%,55%)"} : {}}>
                            <SmallImage style={selected === 1 ? {opacity: ".4", backgroundImage: "url(/images/image-product-1-thumbnail.jpg)"} : {backgroundImage: "url(/images/image-product-1-thumbnail.jpg)"}} onClick={() => setSelected(1)}></SmallImage>
                        </SmallImageContainer>
                        <SmallImageContainer style={selected === 2 ? {outline: "3px solid hsl(26,100%,55%)"} : {}}>
                            <SmallImage style={selected === 2 ? {opacity: ".4", backgroundImage: "url(/images/image-product-2-thumbnail.jpg)"} : {backgroundImage: "url(/images/image-product-2-thumbnail.jpg)"}} onClick={() => setSelected(2)}>
                            </SmallImage>
                        </SmallImageContainer>
                        <SmallImageContainer style={selected === 3 ? {outline: "3px solid hsl(26,100%,55%)"} : {}}>
                            <SmallImage style={selected === 3 ? {opacity: ".4", backgroundImage: "url(/images/image-product-3-thumbnail.jpg)"} : {backgroundImage: "url(/images/image-product-3-thumbnail.jpg)"}} onClick={() => setSelected(3)}>
                            </SmallImage>
                        </SmallImageContainer>
                        <SmallImageContainer style={selected === 4 ? {outline: "3px solid hsl(26,100%,55%)"} : {}}>
                            <SmallImage style={selected === 4 ? {opacity: ".4", backgroundImage: "url(/images/image-product-4-thumbnail.jpg)"} : {backgroundImage: "url(/images/image-product-4-thumbnail.jpg)"}} onClick={() => setSelected(4)}>
                            </SmallImage>
                        </SmallImageContainer>
                    </OtherImagesContainer>
            </ShoeImagesContainer>
            {
                isOpen
                ? <GalleryComponent toggle={toggleGallery}/>
                : ''
            }
        </>
    )
}

export default ShoeImagesSection;