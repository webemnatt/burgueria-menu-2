import Items from "./items";

interface MenuItem {
  id: string;
  name: string;
  src: string;
  description:string;
  price:string;
}

interface MenuProps {
  burgersList: MenuItem[];
  drinksList: MenuItem[];
}

const Menu:React.FC<MenuProps> = ({burgersList,drinksList}) => {
  return (
    <section id='menu' className="p-10">
      <h2 className="text-center text-4xl p-6">Conheça nosso menu</h2>
      <Items id='burgers' itemList={burgersList} gridRows={4}/>
      <h2 className="text-center text-4xl p-6">Bebidas</h2>
      <Items id='drinks' itemList={drinksList} gridRows={2}/>
    </section>
  );
}

export default Menu