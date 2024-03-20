'use client';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartModal from './cartModal'; // Importando o componente CartModal
import { checkRestaurantIsOpen } from '../data'

const Footer: React.FC = () => {
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
          (<span id="cart-count">0</span>) Veja seu carrinho
          <FaCartPlus className="text-lg text-white" />
        </button>
      {restaurantIsOpen && ( // somente em horário comercial o modal é exibido se clicado no botão acima
        <CartModal isOpen={isOpen} whiteModal={whiteModal} openCloseModal={openCloseModal}/>
      )}

    </footer>
  );
}

export default Footer;
