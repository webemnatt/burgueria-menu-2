'use client';
import React, { useState } from 'react';
import { cartItems } from '../main/menu';
import { phone } from '../data'

const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, 
  whiteModal, 
  openCloseModal, 
  handleRemoveItem, 
  handleClearCart 
}) => {
  let total = 0
  const [address, setAddress] = useState<string>('');
  const [addressWarningVisible, setAddressWarningVisible] = useState<boolean>(false);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setAddressWarningVisible(false); // Oculta a mensagem de aviso ao digitar
  };

  const handleCheckout = () => {
    if (address.trim() === '') {
      setAddressWarningVisible(true); // Mostra a mensagem de aviso se o endereço estiver vazio
      return;
    }
    let total = 0
    const itemInfo = cartItems.map((item) => {
      total += (item.price * item.quantity)
      return(
      ` ${item.name} Quantidade: ${item.quantity}; `
    )}).join("");

    const useCart = `${itemInfo} Total do pedido: R$ ${total.toFixed(2).replace(".", ",")}.`;
    const message = encodeURIComponent(useCart + ` Endereço: ${address}`);

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

    //chamando as funções para limpar após finalizar o pedido
    setAddress(''); // limpa o input
    openCloseModal(); // fecha o modal
    handleClearCart(); // limpa o carrinho
  };

  return (
    <div
      id="cart-modal"
      className={`bg-black/60 w-full h-full fixed top-0 left-0 items-center justify-center z-auto ${
        isOpen ? 'flex' : 'hidden'
      }`}
      onClick={whiteModal}
    >
      <div className="bg-white p-6 rounded-md min-w-[80%] md:min-w-[300px] max-h-full overflow-y-auto">
        <h2 className="text-center font-bold text-2xl mb-3">Meu Carrinho</h2>
        <div id="cart-item" className="flex justify-between mb-2 flex-col">
        <ul> 
          {cartItems.map((item, index) => (
            <li key={index} className="grid grid-cols-1 md:grid-cols-2 mb-4">
              <div className="flex gap-2">
                <span className="flex font-bold items-center">{item.name}</span>
                <span className="flex ml-auto items-center">{`R$ ${(item.price*item.quantity).toFixed(2).replace(".",",")}`}</span>
              </div>
              <span className="flex ml-auto items-center">{`Qtde (${item.quantity})`}
                <button 
                className="flex ml-4 border-2 border-rose-50 hover:border-rose-600 rounded-lg p-0.5 " 
                onClick={()=>handleRemoveItem(item.name)}
                aria-label="Botão de reduzir a quantidade do item de um em um."
                >
                  Remover
                </button>
              </span>
            </li>
          ))}
        </ul>
        </div>
        <div className="flex justify-end">
          {cartItems.map(item => {
            let value = item.price * item.quantity
            total += value
            return null
          })}
          <p className="flex justify-between bg-black text-white p-1.5 rounded-md">
            Total: &nbsp;<span>R$ &nbsp;<span id="cart-total">{total.toFixed(2).replace(".",",")}</span></span>
          </p>
        </div>
        <p className="font-bold mt-4">Endereço de entrega:</p>
        <div>
          <input
            type="text"
            placeholder="Digite seu endereço completo"
            className={`w-full border-2 p-1 rounded my-1 ${addressWarningVisible ? "border-red-500" : ""}`}
            value={address}
            onChange={handleAddressChange}
          />
          {addressWarningVisible ? <p className="text-red-500">Digite seu endereço completo!</p> : <p className="h-[24px]"></p>}
          <div className="flex items-center justify-between mt-1 w-full">
            <button id="close-cart-modal-btn" type="button" onClick={openCloseModal}>Fechar</button>
            <button
             id="checkout-btn" 
             onClick={handleCheckout} 
             className="bg-green-500 text-white px-4 py-1 rounded" 
             disabled={!(cartItems.length>0)}
             >
              Finalizar pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CartModalProps {
  isOpen: boolean;
  whiteModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  openCloseModal: () => void;
  handleRemoveItem: (name: string) => void;
  handleClearCart: () => void;
}

export default CartModal;
