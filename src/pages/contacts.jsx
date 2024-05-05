import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Layout from '../app/layout/Layout';
import mailIcon from "../assets/icons/mail.svg"
import addressIcon from "../assets/icons/address.svg"
import phoneIcon from "../assets/icons/phone.svg"
import clockIcon from "../assets/icons/clock.svg"

const Contacts = () => {
  return (
    <Layout>
        <h2 className="section__title">Контакты</h2>
        <div className="contacts">
          <div className='col'>
            <ul className="contacts-list">
              <li className="contacts-list__item">
                <div className="contacts-list__col">
                  <img className="contacts-list__item--icon" src={addressIcon} />
                </div>
                <div className="contacts-list__col">
                  <p className="contacts-list__item_title">Адрес</p>
                  <a href="https://yandex.ru/maps/-/CDbYaQ-n" className="contacts-list__item_description">Г. Ставрополь, ул. Десантников, д. 35</a>
                </div>
              </li>
              <li className="contacts-list__item">
                <div className="contacts-list__col">
                  <img className="contacts-list__item--icon" src={clockIcon} />
                </div>
                <div className="contacts-list__col">
                  <p className="contacts-list__item_title">Режим работы</p>
                  <p className="contacts-list__item_description">Пн-Вс: 9:00-21:00</p>
                </div>
              </li>
              <li className="contacts-list__item">
                <div className="contacts-list__col">
                  <img className="contacts-list__item--icon" src={phoneIcon} />
                </div>
                <div className="contacts-list__col">
                  <p className="contacts-list__item_title">Телефон</p>
                  <a href="tel:+79686773333" className="contacts-list__item_description">+7 (968) 677-33-33</a>
                </div>
              </li>
              <li className="contacts-list__item">
                <div className="contacts-list__col">
                  <img className="contacts-list__item--icon" src={mailIcon} />
                </div>
                <div className="contacts-list__col">
                  <p className="contacts-list__item_title">Email</p>
                  <a href="mailto:santexdom26@mail.ru" className="contacts-list__item_description">santexdom26@mail.ru</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col map">
          <YMaps query={{
            load: "package.full",
            apikey: "e93e98c3-63a7-4ee9-8394-2011186193f7",
          }}>
              <Map defaultState={{ center: [45.037948, 42.035352], zoom: 19 }} height={"100%"} width={"100%"}>
                <Placemark geometry={[45.037948, 42.035352]} />
              </Map>
          </YMaps>
          </div>
        </div>
    </Layout>
  )
};

export default Contacts;
