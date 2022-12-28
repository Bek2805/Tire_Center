import React from 'react';
import hero from '../assets/images/hero.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="">
                <div className="hero_img">
                    <img src={hero} alt="" />
                    <h1 className="hero_title"><span>Шиномонтаж и доставка <br />бесплатно</span></h1>
                    <button className="hero_btn">Подробнее</button>
                    <div className="hero_bottom">
                        <p class="hero_bottom_title">Подберём шины или <a class="hero_href" href="#">диски</a> по марке автомобиля или <a class="hero_href" href="#">параметрам товара</a></p>
                        <div className="hero_option d-flex justify-center">
                            <select className="hero_choice">
                                <option>Производитель</option>
                            </select>
                            <select className="hero_choice">
                                <option>Модель</option>
                            </select>
                            <select className="hero_choice">
                                <option>Поколение</option>
                            </select>
                            <select className="hero_choice">
                                <option>Модификация</option>
                            </select>
                            <select className="hero_choice">
                                <option>Кузов</option>
                            </select>
                        </div>
                        <div className="d-flex justify-center">
                            <button className="hero_button">Подобрать</button>
                        </div>
                        <svg class="hero_separation" width="1224" height="1" viewBox="0 0 1224 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1224" height="1" fill="#E5E5E5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;