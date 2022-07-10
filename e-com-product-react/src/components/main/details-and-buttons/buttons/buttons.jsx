import { useState, useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

import {BsPlusLg} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'

import { CartButtonsContainer, QuantityBtnsContainer, BtnSpan, QuantityInput, AddToCartImg, AddToCartBtn } from './buttons.styles';

function ButtonsContainer(){
    const cartInfo = useContext(CartContext);
    const [quantity, setQuantity] = useState(0)

    const increment = () => setQuantity(quantity + 1);

    const decrement = () => {
        if ((quantity - 1) < 0) {
            setQuantity(0);
        }else{
            setQuantity(quantity - 1);
        }
    }

    const addToCart = () => {
        cartInfo.addProductToCart(quantity);
        setQuantity(0);
    }

    const manualQuantityInput = (e) => {
        if (e.target.value !== '' || e.target.value > 0) {
            setQuantity(Number(e.target.value));
        }
    }

    return(
        <CartButtonsContainer>
            <QuantityBtnsContainer>
                <BtnSpan onClick={decrement}>
                    <BiMinus />
                </BtnSpan>
                <QuantityInput value={quantity} type="number" min="0" onChange={manualQuantityInput}/>
                <BtnSpan onClick={increment}>
                    <BsPlusLg style={{transform: "scale(.7)"}}/>
                </BtnSpan>
            </QuantityBtnsContainer>
            <div className="add-to-cart-btn">
                <AddToCartImg src="/images/icon-cart.svg" />
                <AddToCartBtn onClick={addToCart}>
                    Add to cart
                </AddToCartBtn>
            </div>
        </CartButtonsContainer>
    )
}

export default ButtonsContainer;