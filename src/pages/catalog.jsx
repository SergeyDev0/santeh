import React from "react";
import Layout from './../app/layout/Layout';
import products from "../shared/catalogData/catalogData.json";
import CatalogCard from "../widgets/catalogCard/ui/CatalogCard";

const Catalog = () => {
  return (
    <Layout>
      <div className="catalog__wrapper-cards">
        {
          products.map((item) => (
            <CatalogCard item={item} key={item.id} />
          ))
        }
      </div>
    </Layout>
  )
};

export default Catalog;
