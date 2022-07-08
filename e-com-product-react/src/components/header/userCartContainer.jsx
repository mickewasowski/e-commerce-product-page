import { useState, useEffect } from "react";

import CartList from "./cartList";
import {UserCartContainer as UserCartCont, CartButton, CartIcon, CartCount, UserIconContainer, UserImg} from './userCartContainer.styles';

function UserCartContainer(){
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        if (!isCartOpen) {
            setIsCartOpen(true);
        }else{
            setIsCartOpen(false);
        }
    }

    return(
        <UserCartCont>
            <CartCount style={{display: 'none'}}>0</CartCount>
            <CartButton onClick={toggleCart}>
                <CartIcon />
            </CartButton>
            {
                isCartOpen 
                ? <CartList/>
                : ''
            }
            <UserIconContainer>
                <UserImg src="/images/image-avatar.png" />
            </UserIconContainer>
        </UserCartCont>
    )
}

export default UserCartContainer;