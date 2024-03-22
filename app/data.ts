export const restaurantData = {
  logo: 'hamb-1.svg',
  name: 'Burgueria',
  address: 'Rua Toda Sorte do Mundo, 100, Cidade Boa, Estado Bom',
}
export const phone = "2140044004"
const openAt: number = 7;
const closeAt: number = 22;
export const labelText: string = `Seg a Dom - ${openAt}:00 às ${closeAt}:00`;

export const checkRestaurantIsOpen = (): boolean => {
  const date = new Date(); // data atual
  const hour = date.getHours(); // hora atual
  return hour >= openAt && hour < closeAt;
  // se retorna true (está dentro do intervalo, o restaurante está aberto)
  // dentro do intervalo: aberto; fora: fechado
};

export const burgersMenu = [
  {
    id:'0',
    name:'Cheese Burger Duplo',
    src:'hamb-2.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:35.00,
  },
  {
    id:'1',
    name:'Smash Burger',
    src:'hamb-3.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:26.00,
  },
  {
    id:'2',
    name:'Cheese Salad',
    src:'hamb-4.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:32.00,
  },
  {
    id:'3',
    name:'Hamburguer Smash',
    src:'hamb-5.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:18.90,
  },
  {
    id:'4',
    name:'Potatoes Burger',
    src:'hamb-6.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:18.90,
  },
  {
    id:'5',
    name:'Fish Burger',
    src:'hamb-7.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:34.90,
  },
  {
    id:'6',
    name:'Vegan Burger',
    src:'hamb-8.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:24.00,
  },
  {
    id:'7',
    name:'Shrimp Burger',
    src:'hamb-1.svg',
    description:'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price:50.00,
  },
  
]

export const drinksMenu = [
  {
    id:'0',
    name:'Coca-cola',
    src:'refri-1.svg',
    description:'',
    price:6.00,
  },
  {
    id:'1',
    name:'Guaraná',
    src:'refri-2.svg',
    description:'',
    price:6.00,
  },
]

export const mobileMenu = [
  {
    id: '0',
    name: 'Home',
    href: '#hero',
  },
  {
    id: '1',
    name: 'Hambúrgueres',
    href: '#burgers',
  },
  {
    id: '2',
    name: 'Bebidas',
    href: '#drinks',
  },
];

export const headerMenu = mobileMenu.slice(1, 4);
