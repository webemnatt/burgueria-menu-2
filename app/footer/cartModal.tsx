import React from 'react';
import { cartItems } from '../main/menu';

interface CartModalProps {
  isOpen: boolean;
  whiteModal: React.MouseEventHandler<HTMLDivElement>;
  openCloseModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, whiteModal, openCloseModal }) => {
  let total = 0
  return (
    <div
      id="cart-modal"
      className={`bg-black/60 w-full h-full fixed top-0 left-0 z- items-center justify-center ${
        isOpen ? 'flex' : 'hidden'
      }`}
      onClick={whiteModal}
    >
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
        <div id="cart-item" className="flex justify-between mb-2 flex-col">
        <ul> 
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>R$ {item.price}</span>
              <span>Quantidade ({item.quantity})</span>
            </li>
          ))}
        </ul>
        </div>
        <div className=" flex justify-end ">
          {cartItems.map(item => {
            let value = item.price * item.quantity
            total += value
            return null
          })}
          <p className="flex justify-between bg-black text-white p-1.5 rounded-md">Total: &nbsp;<span>R$ &nbsp;<span id="cart-total">{(total).toFixed(2)}</span></span></p>
        </div>
        <p className="font-bold mt-4">Endereço de entrega:</p>
        <input type="text" placeholder="Digite seu endereço completo" id="address" className="w-full border-2 p-1 rounded my-1" />
        <p id="address-warn" className="text-red-500 hidden">Digite seu endereço completo!</p>
        <div className="flex items-center justify-between mt-5 w-full">
          <button id="close-cart-modal-btn" type="button" onClick={openCloseModal}>Fechar</button>
          <button id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar pedido</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
