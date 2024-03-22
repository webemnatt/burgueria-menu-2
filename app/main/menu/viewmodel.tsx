'use client';
import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (name: string, price: number) => {
    const existingItemIndex = cartItems.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
      setCartItems(prevCartItems => prevCartItems.map((item, index) =>
      index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      setCartItems(prevCartItems => [ ...prevCartItems,{
        name,
        price,
        quantity:1
      }])
    }
  };

  const removeItem = (itemName: string) => {
    const index = cartItems.findIndex(item => item.name === itemName);
    if (index !== -1) {
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        if (updatedCartItems[index].quantity > 1) {
          updatedCartItems[index] = { ...updatedCartItems[index], quantity: updatedCartItems[index].quantity - 1 };
        } else {
          updatedCartItems.splice(index, 1);
        }
        return updatedCartItems;
      });
    }
  };

  const getCartItems = () => {
    return cartItems;
  };

  return { addToCart, getCartItems, removeItem };
};

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

