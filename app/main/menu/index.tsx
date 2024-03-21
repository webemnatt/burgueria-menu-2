'use client';
import Items from "./items";
import { useCart } from './viewmodel'

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

let cartItems:any[] = []

// componente que exibe o menu de burgers e bebidas
const Menu:React.FC<MenuProps> = ({burgersList,drinksList}) => {
  const { addToCart, getCartItems } = useCart()
  cartItems = getCartItems()

  const handleAddToCart = (name: string, price: number) => {
    addToCart(name, price)
  }

  let total = 0;

  return (
    <section id='menu' className="p-10">
      <h2 className="text-center text-4xl p-6">Conheça nosso menu</h2>
      <Items id='burgers' itemList={burgersList} gridRows={4} onAddToCart={handleAddToCart}/>
      {cartItems.map(item => {
        total += item.quantity
        return null
      })}
      <p>Total de quantidade: {total}</p>
      <h2 className="text-center text-4xl p-6">Bebidas</h2>
      <Items id='drinks' itemList={drinksList} gridRows={2} onAddToCart={handleAddToCart}/>
    </section>
  );
}

export { cartItems }; // Exportando a variável items
export default Menu