// 'use client';
import { useEffect, useState } from 'react';

interface StatusProps {
  labelText: string;
  status: () => boolean; // Adicionando a função como uma propriedade
}

const RestaurantStatus: React.FC<StatusProps> = ({ labelText, status }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(status());
  }, [status]);

  return (
    <div className={`py-1 px-4 rounded-lg mt-5 flex flex-col-reverse ${isOpen ? 'bg-green-600' : 'bg-red-500'}`}>
      <span className="font-bold text-white text-center">
        {isOpen ? 'Aberto' : 'Fechado'}
      </span>
      <span className="text-white text-base">{labelText}</span>
    </div>
  );
};

export default RestaurantStatus;
