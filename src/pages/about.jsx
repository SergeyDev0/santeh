import React from "react";
import Layout from './../app/layout/Layout';
import banner from "../assets/images/background.webp";

const About = () => {
  return (
    <Layout>
      <div className="about__banner">
        <img className="about__banner--img" src={banner} />
      </div>
      <div className="about__text-wrapper">
        <p className="about__text">Наша организация "Сантех-Дисконт" с радостью приглашает вас в мир качественного и надежного оборудования для вашего жилого объекта! Мы на рынке с 2005 года и за это время заслужили безупречную репутацию как надежный и профессиональный магазин.</p> 
        <p className="about__text">Мы специализируемся на оборудовании для объектов жилого назначения, систем отопления, водоснабжения, водоотведения, вентиляции, кондиционирования и пара. Наш широкий ассортимент товаров удовлетворит даже самых взыскательных клиентов. Мы гордимся тем, что каждый клиент для нас значим, поэтому мы стремимся к максимальной удовлетворенности наших покупателей. Работая с нами, вы получаете не только качественное оборудование, но и надежного партнера на долгие годы.</p>
        <p className="about__text">Не откладывайте на потом заботу о качестве вашего жилья. Обратитесь к профессионалам - обратитесь к нам!</p>
        <span className="about__text--span">С уважением, &nbsp; <i>Сантех-Дисконт</i>.</span>
      </div>
    </Layout>
  )
};

export default About;
