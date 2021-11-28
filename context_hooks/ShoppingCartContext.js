import { createContext, useEffect, useMemo, useState } from "react";

export const ShoppingCartContext = createContext();

function persistCartItemsToStorage(cartItems) {
    localStorage.setItem('mascota-shopping-cart', JSON.stringify(cartItems));
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
        const hasItems = localStorage.getItem('mascota-shopping-cart');
        if (hasItems) setCartItems(JSON.parse(hasItems));
    }, []);

    useEffect(() => {
        persistCartItemsToStorage(cartItems);
        setTotalPrice(getTotalPrice(cartItems));
    }, [cartItems]);

    function isInTheCart(id) {
        return cartItems.some(item => item.id === id);
    }

    function addToShoppingCart({ id, name, desc, price, quantity }) {
        const isInTheCart = cartItems.some(item => item.id === id);
        if (isInTheCart) return;

        setCartItems(prevItems => [...prevItems, {
            id: id, name: name, desc: desc, price: price, quantity: quantity
        }]);
    }

    function removeFromShoppingCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id != id));
    }

    return useMemo(() => ({
        ShoppingCartContext,
        totalPrice,
        cartItems,
        setTotalPrice,
        setCartItems,
        /* operations */
        addToShoppingCart,
        removeFromShoppingCart
    }), [cartItems, totalPrice]);
}