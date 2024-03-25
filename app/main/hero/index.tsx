import Image from 'next/image';
import RestaurantStatus from './restaurantStatus'

const Hero: React.FC<HeroProps> = ({ restaurantData, labelText, status }) => {
  return (
    <section
      id="hero"
      className={`w-full flex flex-col-reverse justify-center sm:flex-row p-4 items-center gap-8 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height w-full ${status() ? 'h-[50vh]' : 'h-[100vh]'} bg-zinc-900 flex justify-center items-center bg-hero-pattern bg-cover`}
    >
      <div className="flex flex-col items-center">
      <Image
        alt="logo da hamburgueria"
        className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
        src={restaurantData.logo}
        width={128}
        height={128}
        priority={true}
      />
        <h1 className="text-3xl text-white mt-4 mb-2 font-bold">{restaurantData.name}</h1>
        <p className="text-sm text-white text-center">
          {restaurantData.address}
        </p>
        <RestaurantStatus labelText={labelText} status={status}/>
      </div>
    </section>
  );
}

interface RestaurantData {
  logo: string;
  name: string;
  address: string;
}

interface HeroProps {
  restaurantData: RestaurantData;
  labelText: string;
  status: () => boolean;
}

export default Hero;