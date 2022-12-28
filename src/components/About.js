import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import about from '../assets/images/about.png'

const About = () => {
    return (
<section className="about">
    <div className="container">
        <div className="grid grid_col-2">
            <div className="about__left-side">
                <div className="about__img">
                    <img src={about} alt=""/>
                </div>
            </div>
            <div className="about__right-side">
                <h2 className="section_title about__title">Шинный центр 13 — один из самых крупных магазинов по продаже шин
                    и дисков в Саранске</h2>
                <p className="first-desc about__desc">Если вы хотите правильно купить шины в Саранске, то должны знать об основных параметрах подбора покрышек. Главное — ориентироваться на информацию, указанную в маркировке.</p>
                <p className=" about__desc">Наша сеть — официальный дилер многих ведущих производителей, у нас вы можете купить шины и диски с полноценной гарантией на весь срок эксплуатации.</p>
                <button className="section__btn about__btn">Подробнее</button>
            </div>
        </div>
    </div>
</section>

    );
};

export default About;