import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-red-900 py-3 fixed bottom-0 z-40 flex items-center justify-center"
    >
      <button
        id="cart-btn"
        className="flex items-center gap-2 text-white font-bold text-lg"
      >
        (<span id="cart-count">0</span>) Veja seu carrinho
        <FaCartPlus className="text-lg text-white" />
      </button>
    </footer>
  );
}
