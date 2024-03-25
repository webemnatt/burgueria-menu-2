'use client';
import { useEffect, useState } from 'react';
import Items from "./items";
import Footer from "@/app/footer";
import CartModal from '../../footer/cartModal'
import { useCart } from './viewmodel'
import { checkRestaurantIsOpen } from '../../data'

const Menu:React.FC<MenuProps> = ({burgersList,drinksList}) => {
  const { addToCart, getCartItems, removeItem, clearCart } = useCart()
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

  const handleClearCart = () => {
    clearCart()
  }
  return (
    <>
      <section id='menu' className="sm:p-2 md:p-15 lg:p-10 mb-16">
        <h2 className="text-center text-4xl p-6">Conheça nosso menu</h2>
        <Items 
        id='burgers' 
        itemList={burgersList} 
        gridRows={4} 
        onAddToCart={handleAddToCart}
        restaurantIsOpen={restaurantIsOpen}
        />
        <h2 className="text-center text-4xl p-6 mt-5">Bebidas</h2>
        <Items 
        id='drinks' 
        itemList={drinksList} 
        gridRows={2} 
        onAddToCart={handleAddToCart}
        restaurantIsOpen={restaurantIsOpen}
        />
      </section>
      {restaurantIsOpen && (
        <Footer cartItems={cartItems} openCloseModal={openCloseModal}/>
      )}
      <CartModal
      isOpen={isOpen}
      handleRemoveItem={handleRemoveItem}
      openCloseModal={openCloseModal}
      whiteModal={whiteModal}
      handleClearCart={handleClearCart}
      />
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