import Header from './../../widgets/header/ui/Header';
import Footer from "../../widgets/footer/ui/Footer";
import "./layout.scss"
import BtnScrollUp from '../../features/btnScrollUp/ui/BtnScrollUp';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
        <BtnScrollUp />
      </main>
      <Footer />
    </>
  )
};

export default Layout;
