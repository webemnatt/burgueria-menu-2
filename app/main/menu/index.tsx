'use client';
import Items from "./items";
import { useCart } from './vielmodel'

interface MenuItem {
  id: string;
  name: string;
  src: string;
  description:string;
  price:number;
}

interface MenuProps {
  burgersList: MenuItem[];
  drinksList: MenuItem[];
}
// componente que exibe o menu de burgers e bebidas
const Menu:React.FC<MenuProps> = ({burgersList,drinksList}) => {
  const { addToCart, getCartItems } = useCart()
  const items = getCartItems()

  const handleAddToCart = (name: string, price: number) => {
    addToCart(name, price)
  }
  
  const handleGetCartItems = () => {
    console.log("clicou no botão do menu",items)
  }

  return (
    <section id='menu' className="p-10">
      <h2 className="text-center text-4xl p-6">Conheça nosso menu</h2>
      <Items id='burgers' itemList={burgersList} gridRows={4} onAddToCart={handleAddToCart}/>
      <button onClick={handleGetCartItems}>
        Obter Itens do Carrinho
      </button>
      <ul> 
          {items.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>R$ {item.price}</span>
              <span>Quantidade ({item.quantity})</span>
            </li>
          ))}
        </ul>
      <h2 className="text-center text-4xl p-6">Bebidas</h2>
      <Items id='drinks' itemList={drinksList} gridRows={2} onAddToCart={handleAddToCart}/>

    </section>
  );
}

export default Menu