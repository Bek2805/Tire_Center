import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRubleSign} from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-solid-svg-icons'

import serices2 from '../assets/images/services2.png'
import services from '../assets/images/services.png'
import services1 from '../assets/images/services1.png'

const Services = () => {
    return (
    <section className="services">
        <div className="container">
                <h2 className="section__title services__title">Популярные услуги</h2>
            <div className="grid grid_col-4">
                <div className="services__card">
                    <div className="services__img">
                        <img src={serices2} alt=""/>
                    </div>
                    <h2 className="section_title services_title">Шиномонтаж</h2>
                    <div>
                        <FontAwesomeIcon className='services__font' icon={faClock}/>
                        <p className="section_desc  services__desc">Ежедневно с 9:00 до 21:00, без перерывов</p>
                    </div>
                    <div className="d-flex services__price">
                        <FontAwesomeIcon className='services__first' icon={faRubleSign}/>
                        <p className="section_desc">от 500 ₽</p>
                    </div>
                </div>
                <div className="services__card">
                    <div className="services__img">
                        <img src={services} alt=""/>
                    </div>
                    <h2 className="section_title services_title">Ремонт и правка дисков</h2>
                    <div>
                        <FontAwesomeIcon className='services__font' icon={faClock}/>
                        <p className="section_desc  services__desc">Ежедневно с 9:00 до 21:00, без перерывов</p>
                    </div>
                    <div className="d-flex  services__price">
                        <FontAwesomeIcon className='services__first' icon={faRubleSign}/>
                        <p className="section_desc">от 800 ₽</p>
                    </div>
                </div>
                <div className="services__card">
                    <div className="services__img">
                        <img src={services1} alt=""/>
                    </div>
                    <h2 className="section_title services_title">Сезонное хранение шин</h2>
                    <div>
                        <FontAwesomeIcon className='services__font' icon={faClock}/>
                        <p className="section_desc  services__desc">Ежедневно с 9:00 до 21:00, без перерывов</p>
                    </div>
                    <div className="d-flex services__price">
                        <FontAwesomeIcon className='services__first' icon={faRubleSign}/>
                        <p className="section_desc">Бесплатно</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-center">
                <button className="section__btn services__btn" >Посмотреть все услуги</button>

            </div>
        </div>
    </section>

    );
};

export default Services;