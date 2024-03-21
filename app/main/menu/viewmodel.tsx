'use client';
import { useState } from 'react';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

//FUNÇÃO PARA EXPORTAR O CARTITEMS LIST com itens de mesmo nome agrupados em um só cuja nova chave 'quantity' é o contador do item adicionado ao carrinho
export const useCart = () => {
  //cartItems é uma variável de estado que mantém uma lista de objetos, e cada objeto representa um item no carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  //função que atualiza o nome e o preço de cada item
  const addToCart = (name: string, price: number) => {
    //verifica se o item que está sendo adicionado já existe na lista do carrinho
    const existingItem = cartItems.find(item => item.name === name)

    if (existingItem) {
      //abre a "lista" anterior, copia apenas o objeto de mesmo nome e atualiza a chave quantity incrementando seu valor; se não encontrou, mantém o objeto
      setCartItems(prevCartItems => prevCartItems.map(item => item.name === name ? { ... item, quantity: item.quantity+1} : item))
      //lembrando que a função setCartItems atualiza cartItems.
    } else {
      // se objeto que está sendo adicionado é completamente novo, copia a "lista" anterior inteira, com todos os objetos nela contida, para daí adicionar o novo objeto com nome e preço já fornecidos e acrescentando nova chave 'quantity' de valor 1
      setCartItems(prevCartItems => [ ...prevCartItems,{
        name,
        price,
        quantity:1
      }])
    }
  };

  //exporta a lista do que foi adicionado ao carrinho
  const getCartItems = () => {
    return cartItems;
  };

  return { addToCart, getCartItems };
};

/*
 * antes: quando usuário clica no mesmo item para comprar mais de um, o objeto era repetido e cartItem.length retornava 3, pois 3 objetos
[
    {
        "name": "Vegan Burger",
        "price": 24,
    },
    {
        "name": "Vegan Burger",
        "price": 24,
    },
    {
        "name": "Vegan Burger",
        "price": 24,
    },
    {
        "name": "Fish Burger",
        "price": 34.9,
    }    
]

 * depois: cada objeto tem seu próprio contador de sua quantidade (cartItem.length agora retorna a quantidade de objetos, neste caso, 2)
[
    {
        "name": "Vegan Burger",
        "price": 24,
        "quantity": 3
    },
    {
        "name": "Fish Burger",
        "price": 34.9,
        "quantity": 1
    }
]

*/

