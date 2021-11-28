import { createContext, useEffect, useMemo, useState } from "react";

export const ShoppingCartContext = createContext();

function persistCartItemsToStorage(cartItems) {
    localStorage.setItem('mascota-shopping-cart', cartItems);
}

function getTotalPrice(cartItems) {
    let total = 0;
    cartItems.forEach(item => total += item.price * item.quantity);
    return total;
}

export default function useShoppingCart() {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        persistCartItemsToStorage(cartItems);
        setTotalPrice(getTotalPrice(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const items = localStorage.getItem('mascota-shopping-cart');
        if (items) setCartItems(JSON.parse(items));
    }, []);

    return useMemo(() => ({
        ShoppingCartContext,
        totalPrice,
        setTotalPrice,
        cartItems,
        setCartItems
    }), [cartItems]);
}