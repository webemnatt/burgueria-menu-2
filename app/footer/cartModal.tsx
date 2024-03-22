import { cartItems } from '../main/menu';

const CartModal: React.FC<CartModalProps> = ({ isOpen, whiteModal, openCloseModal, handleRemoveItem }) => {
  let total = 0

  return (
    <div
      id="cart-modal"
      className={`bg-black/60 w-full h-full fixed top-0 left-0 items-center justify-center z-auto ${
        isOpen ? 'flex' : 'hidden'
      }`}
      onClick={whiteModal}
    >
      <div className="bg-white p-6 rounded-md min-w-90%] md:min-w-[600px]">
        <h2 className="text-center font-bold text-2xl mb-3">Meu Carrinho</h2>
        <div id="cart-item" className="flex justify-between mb-2 flex-col">
        <ul> 
          {cartItems.map((item, index) => (
            <li key={index} className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <span className="flex font-bold">{item.name}</span>
              <span className="flex ml-auto">
                {`R$ ${(item.price*item.quantity).toFixed(2).replace(".",",")}`}
              </span>
              <span className="flex ml-auto">{`Qtde (${item.quantity})`}
                <button className="flex ml-4" onClick={()=>handleRemoveItem(item.name)}>
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

interface CartModalProps {
  isOpen: boolean;
  whiteModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  openCloseModal: () => void;
  handleRemoveItem: (name: string) => void;
}

export default CartModal;
