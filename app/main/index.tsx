'use client'; // não remover!!
import Hero from './hero';
import Menu from './menu';
import { restaurantData,labelText,checkRestaurantIsOpen,burgersMenu,drinksMenu } from '../data';

const Main:React.FC = () => {
  return (
    <main className="max-w-8xl max-auto">
      <Hero restaurantData={restaurantData} labelText={labelText} status={checkRestaurantIsOpen}/>
      <Menu burgersList={burgersMenu} drinksList={drinksMenu}/>
    </main>
  );
}

export default Main