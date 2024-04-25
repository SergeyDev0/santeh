import { Link } from "react-router-dom"
import Logo from "../../../assets/icons/logo.svg"
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header__logo">
          <img src={Logo} alt="Логотип" className="header__logo--icon" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list__item">
              <Link to="/" className="header__nav-list__item--link">Главная</Link>
            </li>
            <li className="header__nav-list__item">
              <Link to="/" className="header__nav-list__item--link">Каталог</Link>
            </li>
            <li className="header__nav-list__item">
              <Link to="/" className="header__nav-list__item--link">Отзывы</Link>
            </li>
            <li className="header__nav-list__item">
              <Link to="/about" className="header__nav-list__item--link">О нас</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
