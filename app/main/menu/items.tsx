import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

const Items: React.FC<ItemsProps> = ({ itemList, id, gridRows, onAddToCart,restaurantIsOpen }) => {
  const handleAddToCart = (name: string, price: number) => {
    onAddToCart(name,price);
  };

  return (
    <div id={id} className={`grid grid-cols-1 md:grid-cols-2 grid-rows-${gridRows} gap-7 md:gap-10 mx-auto max-w-7xl px-2`}>
      {itemList.map((item) => (
        <div key={item.id} className="flex gap-2 items-center">
          <Image
            alt={item.name}
            className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
            src={item.src}
            width={112}
            height={112}
          />
          <div className="grid w-full">
            <p className="font-bold text-xl">{item.name}</p>
            <p className="text-sm my-2">{item.description}</p>
            <div className="flex items-center gap-2 justify-between">
              <p className="font-bold text-xl">R$ {(item.price).toFixed(2).replace(".",",")}</p>
              {restaurantIsOpen ? (
                  <button
                    id="meu-botao"
                    className="bg-gray-900 px-5 py-1 rounded add-to-cart-btn leading-5"
                    data-name={item.name}
                    data-price={item.price}
                    onClick={() => handleAddToCart(item.name, item.price )}
                  >
                    <FaCartPlus className="text-lg text-white" />
                  </button>
                ) : (
                  <a href="#hero">
                    <button
                    className="bg-gray-900 px-5 py-1 rounded add-to-cart-btn leading-5"
                    >
                      <FaCartPlus className="text-lg text-white" />
                    </button>
                  </a>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface MenuItem {
  id: string;
  name: string;
  src: string;
  description: string;
  price: number;
}

interface ItemsProps {
  itemList: MenuItem[];
  id: string;
  gridRows: number;
  onAddToCart: (name: string, price: number) => void;
  restaurantIsOpen:boolean;
}

export default Items;
