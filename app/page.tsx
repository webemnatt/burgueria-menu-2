import Header from './header/index';
import Main from './main/index';
import { mobileMenu, headerMenu } from './data';

export default function Home() {
  return (
    <>
      <Header headerList={headerMenu} mobileList={mobileMenu} />
      <Main />
    </>
  );
}
