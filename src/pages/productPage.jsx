import React from "react";
import Layout from '../app/layout/Layout';
import courier from "../assets/icons/courier.svg";
import { useParams } from "react-router-dom";
import catalogData from "../shared/catalogData/catalogData.json";

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    setProduct(catalogData.find(item => item.id == id));
  }, [])
  return (
    <Layout>
      <div className="product-page">
        <div className="product-page__img-wrapper">
          <img src={product.image} className="product-page__img" />
        </div>
        <div className="product-page__info">
          <h2 className="product-page__info-title">{product.name}</h2>
          <div className="product-page__info-panel">
            <h3 className="product-page__info-panel__price">{product.price} руб</h3>
            <a href="tel:+79686773333" className="product-page__info-panel__button">Уточнить наличие товара</a>
            <div className="product-page__feature">
              <img className="product-page__feature-icon" src={courier} /> 
              <div className="product-page__feature-text">
                Курьером в Ставрополе&nbsp;
                <span></span>
                &nbsp;от 1500 руб
              </div>
            </div>
          </div>
          <div className="product-page__info-panel">
            <h4 className="product-page__info-panel__title">Установка от <span>1500 руб</span></h4>
          </div>
          <h3 className="product-page__subtitle">О товаре</h3>
          <ul className="product-page__specs-list">
            <li className="product-page__specs-list__item">Длина:<span>{product.length} см</span></li>
            <li className="product-page__specs-list__item">Ширина:<span>{product.width} см</span></li>
            <li className="product-page__specs-list__item">Высота:<span>{product.height} см</span></li>
          </ul>
          <p className="product-page__description">{product.description}</p>
        </div>
      </div>
    </Layout>
  )
};

export default ProductPage;
