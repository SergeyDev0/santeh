import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CatalogCard from '../widgets/catalogCard/ui/CatalogCard';
import Layout from './../app/layout/Layout';
import banner3 from "../assets/images/discount2.webp";
import banner2 from "../assets/images/discount1.webp";
import banner1 from "../assets/images/discount3.webp";
import swipeIcon from "../assets/icons/scroll-h.svg"
import catalogData from "../shared/catalogData/catalogData.json"
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const [selectedIndexesRec, setSelectedIndexesRec] = React.useState([13, 27, 39, 24, 7, 55, 19, 50, 44, 49]);
  const [selectedIndexesDisc, setSelectedIndexesDisc] = React.useState([2, 7, 16, 32, 35, 41, 44, 49, 18, 53]);

  React.useEffect(() => {
    setSelectedIndexesRec(selectedIndexesRec.map(index => catalogData[index]));
    setSelectedIndexesDisc(selectedIndexesDisc.map(index => catalogData[index]));
  }, [])

  return (
    <Layout>
      <div className="home__banner-wrapper">
        <a href='/contacts' className="home__banner">
          <img className='home__banner--img' src={banner1} />
        </a>
        <a href='/catalog' className="home__banner">
          <img className='home__banner--img' src={banner2} />
        </a>
        <a href='/catalog' className="home__banner">
          <img className='home__banner--img' src={banner3} />
        </a>
      </div>
      <section className='home__sections'>
        <div className='slider-h'>
          <div className="slider-h__icon-wrapper">
            <img src={swipeIcon} className="slider-h__icon" />
          </div>
          <h2 className="section__title">Рекомендуем</h2>
        </div>
        <Swiper
          className='home__swiper'
          spaceBetween={24}
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {
            selectedIndexesRec.map((item, i) => (
              <SwiperSlide key={i}>
                <CatalogCard item={item} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      <section className='home__sections discounts'>
        <div className='slider-h'>
          <div className="slider-h__icon-wrapper">
            <img src={swipeIcon} className="slider-h__icon" />
          </div>
          <h2 className="section__title">Скидки на товары</h2>
        </div>
        <Swiper
          className='home__swiper'
          spaceBetween={24}
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {
            selectedIndexesDisc.map((item, i) => (
              <SwiperSlide key={i}>
                <CatalogCard item={item} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </Layout>
  )
};

export default Home;
