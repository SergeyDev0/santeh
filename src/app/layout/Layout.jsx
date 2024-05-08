import Header from './../../widgets/header/ui/Header';
import Footer from "../../widgets/footer/ui/Footer";
import "./layout.scss"
import BtnScrollUp from '../../features/btnScrollUp/ui/BtnScrollUp';
import TabBar from '../../widgets/tabBar/ui/TabBar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
        <BtnScrollUp />
      </main>
      <TabBar />
      <Footer />
    </>
  )
};

export default Layout;
