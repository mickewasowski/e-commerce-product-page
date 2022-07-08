import { RiDeleteBin6Line } from "react-icons/ri";

import { CartItemCont, ImageThumbnailCont, ItemImg, ItemDetailsCont, ItemHeading, ItemPrice, BoldTotal, DeleteIconCont } from './cartItem.styles';



function CartItem(){
    const itemCount = 3;

    return(
        <CartItemCont style={{display: 'none'}}>
            <ImageThumbnailCont>
                <ItemImg src="/images/image-product-1-thumbnail.jpg" />
            </ImageThumbnailCont>
            <ItemDetailsCont>
                <ItemHeading>Fall Limited Edition Sneakers</ItemHeading>
                <ItemPrice>$125.00 x {itemCount} <BoldTotal>$375.00</BoldTotal></ItemPrice>
            </ItemDetailsCont>
            <DeleteIconCont>
            {/*onclick="removeFromCart()" */}
                <RiDeleteBin6Line />
            </DeleteIconCont>
        </CartItemCont>
    )
}

export default CartItem;