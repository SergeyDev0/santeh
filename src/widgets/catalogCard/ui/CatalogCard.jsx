import React from "react";
import { Link } from "react-router-dom";
import "./catalogCard.scss"

const CatalogCard = ({item}) => {
  return (
    <Link to={`/${item.id}`} className="catalog-card">
      <img className="catalog-card__img" src={item.image} />
      <h3 className="catalog-card__price">{item.price} руб</h3>
      <h4 className="catalog-card__title">{item.name}</h4>
      <ul className="catalog-card__feature-list">
        <li className="catalog-card__feature-list__item"><span>Ширина:</span> {item?.width} см</li>
        <li className="catalog-card__feature-list__item"><span>Длина:</span> {item?.length} см</li>
        <li className="catalog-card__feature-list__item"><span>Высота:</span> {item?.height} см</li>
      </ul>
    </Link>
  )
};

export default CatalogCard;
