'use client';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartModal from './cartModal';
import { checkRestaurantIsOpen } from '../data'

interface FooterProps {
  cartItems:any[];
}

//componente footer com contador de itens do carrinho
const Footer: React.FC<FooterProps> = ({cartItems}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //modal
  const [restaurantIsOpen, setRestaurantIsOpen] = useState<boolean>(false); //aberto ao público

  useEffect(() => {
    setRestaurantIsOpen(checkRestaurantIsOpen()); //seta de acordo com o boolean do checkRestaurantIsOpen
  }, [checkRestaurantIsOpen]);

  const openCloseModal = () => {
    setIsOpen(!isOpen); // Alternar o estado isOpen
  }

  const whiteModal = (event: React.MouseEvent<HTMLDivElement>) => {
    // Fechar o modal se clicar FORA da área branca
    if (event.target === event.currentTarget) { // Verifica se o clique foi fora do conteúdo do modal
      setIsOpen(false); // Fecha o modal
    }
  }

  let total = 0;

  return (
    <footer
      id="footer"
      className="w-full bg-red-900 py-3 fixed bottom-0 z-40 flex items-center justify-center"
    >
      <button
        id="cart-btn"
        className={`flex items-center gap-2 text-white font-bold text-lg`}
        onClick={openCloseModal} // Chama a função para abrir ou fechar o modal
      >
        {cartItems.map(item => {// incrementa quantidade ao contador
          total += item.quantity
          return null
        })}
        (<span id="cart-count">{total}</span>) Veja seu carrinho
        <FaCartPlus className="text-lg text-white" />
      </button>
      {restaurantIsOpen && ( // somente em horário comercial o modal é exibido se clicado no botão acima
        <CartModal isOpen={isOpen} whiteModal={whiteModal} openCloseModal={openCloseModal}/>
      )}
    </footer>
  );
}

export default Footer;
