'use client';
import { useEffect, useState } from 'react';
import Items from "./items";
import Footer from "@/app/footer";
import CartModal from '../../footer/cartModal'
import { useCart } from './viewmodel'
import { checkRestaurantIsOpen } from '../../data'

const Menu:React.FC<MenuProps> = ({burgersList,drinksList}) => {
  const { addToCart, getCartItems, removeItem } = useCart()
  cartItems = getCartItems()

  const [isOpen, setIsOpen] = useState<boolean>(false); //modal
  const [restaurantIsOpen, setRestaurantIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setRestaurantIsOpen(checkRestaurantIsOpen());
  }, [checkRestaurantIsOpen]);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  }

  const whiteModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  }

  const handleAddToCart = (name: string, price: number) => {
    addToCart(name, price)
  }

  const handleRemoveItem = (name: string) => {
    removeItem(name)
  }
  return (
    <>
      <section id='menu' className="p-10">
        <h2 className="text-center text-4xl p-6">Conheça nosso menu</h2>
        <Items 
        id='burgers' 
        itemList={burgersList} 
        gridRows={4} 
        onAddToCart={handleAddToCart}/>
        <h2 className="text-center text-4xl p-6">Bebidas</h2>
        <Items 
        id='drinks' 
        itemList={drinksList} 
        gridRows={2} 
        onAddToCart={handleAddToCart}/>
      </section>
      <Footer cartItems={cartItems} openCloseModal={openCloseModal}/>
      {restaurantIsOpen && (
          <CartModal
          isOpen={isOpen}
          handleRemoveItem={handleRemoveItem}
          openCloseModal={openCloseModal}
          whiteModal={whiteModal}
          />
      )}
    </>
  );
}

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

//Footer e cartModal precisaram ser importados aqui por conta do useCart (hook personalizado) ser todo usado aqui no menu
export {cartItems} //exportando variável
export default Menu