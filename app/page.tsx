import Header from './header/index';
import Main from './main/index';
import Footer from './footer/index';
import { mobileMenu, headerMenu } from './data';

export default function Home() {
  return (
    <>
      <Header headerList={headerMenu} mobileList={mobileMenu} />
      <Main />
      <Footer />
    </>
  );
}
