import { FaCartPlus } from 'react-icons/fa';

const Footer: React.FC<FooterProps> = ({ cartItems, openCloseModal }) => {
  let total = 0;

  return (
    <footer
      id="footer"
      className="w-full bg-red-900 py-3 fixed bottom-0 z-40 flex items-center justify-center z-0"
    >
      <button
        id="cart-btn"
        className={`flex items-center gap-2 text-white font-bold text-lg`}
        onClick={openCloseModal} 
      >
        {cartItems.map(item => {
          total += item.quantity
          return null
        })}
        (<span id="cart-count">{total}</span>) Veja seu carrinho <FaCartPlus className="text-lg text-white" />
      </button>
    </footer>
  );
}

interface FooterProps {
  cartItems: any[];
  openCloseModal: () => void;
}

export default Footer;
