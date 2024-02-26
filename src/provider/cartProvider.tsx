import React, { PropsWithChildren, createContext, useContext, useState } from 'react'
import { CartItem, Product } from '../types';

type CartType = {
    items: CartItem[]
    total: number
    addItem: (product: Product, size: CartItem['size']) => void
    updateItem: (itemId: string, amount: -1 | 1) => void
}


const CartContext = createContext<CartType>({
    items: [],
    total: 0,
    addItem: () => { },
    updateItem: () => { },
});

const CartProvider = ({ children }: PropsWithChildren) => {

    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {

        const exitItem = items.find(item => item.product == product && item.size == size);

        if (exitItem) {
            updateItem(exitItem.id, 1);
            return;
        }

        const newItem: CartItem = {
            id: 'id_' + items.length + 1,
            product: product,
            product_id: product.id,
            size: size,
            quantity: 1
        }

        setItems([newItem, ...items]);
    }

    const updateItem = (itemId: string, amount: -1 | 1) => {
        const updatedItems = items.map(
            item => item.id == itemId ? { ...item, quantity: item.quantity + amount } : item)
            .filter(item => item.quantity > 0);

        setItems(updatedItems);
    }

    const total = items.reduce((sum, item) => (sum += item.product.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ items, total, addItem, updateItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCart = () => useContext(CartContext);
