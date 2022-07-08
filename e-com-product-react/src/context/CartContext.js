import {createContext, useContext, useState} from 'react';

export const CartContext = createContext({});

const initialState = {
    productQuantity: 0,
};

export const CartInfoProvider = ({
    children
}) => {
    const [cart, setCart] = useState(initialState);

    const addProductToCart = (productQuantity) => {
        setCart({productQuantity});
    }

    const removeProductFromCart = () => {setCart(initialState)}

    return(
        <CartContext.Provider value={{cart, addProductToCart, removeProductFromCart}}>
            {children}
        </CartContext.Provider>
    )
}