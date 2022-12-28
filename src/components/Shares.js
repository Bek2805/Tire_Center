import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons'
import Aktion from '../assets/images/aktion.png'
import Aktion2 from '../assets/images/aktion2.png'
import Aktion1 from '../assets/images/aktion1.png'


const Shares = () => {
    return (
<section className="autotire  shares">
    <div className="container">
        <h2 className="autotire__title">Акции</h2>
        <div className="grid grid_col-3">
            <div className="autotire__card">
                <div className="shares__img">
                    <img src={Aktion} alt=""/>
                </div>
                <h2 className="section_title autotire_title">Тормозные колодки со скидкой 10%</h2>
                <nav className="shares__nav">
                    <a href="#" className="discs__link">Диски</a>
                    <a href="#" className="discs__link">Шины</a>
                </nav>
                <div className="shares__term">
                <FontAwesomeIcon className='shares__font' icon={faClock}/>
                    <p className="shares__desc">Действует до:</p>
                    <p className="shares__date">30.09.2023</p>
                </div>
            </div>
            <div className="autotire__card">
                <div className="shares__img">
                    <img src={Aktion1} alt=""/>
                </div>
                <h2 className="section_title autotire_title">Скидка 10% на датчики давления при покупке дисков!</h2>
                <nav className="shares__nav">
                    <a href="#" className="discs__link">Диски</a>
                    <a href="#" className="discs__link">Шины</a>
                </nav>
                <div>
                <FontAwesomeIcon className='shares__font' icon={faClock}/>
                    <p className="shares__desc">Действует до:</p>
                    <p className="shares__date">30.09.2023</p>

                </div>
            </div>
            <div className="autotire__card">
                <div className="shares__img">
                    <img src={Aktion2} alt=""/>
                </div>
                <h2 className="section_title autotire_title">Покупайте новую АКБ
                    со скидкой до 1500 рублей
                    и бесплатной заменой!</h2>
                <nav className="shares__nav">
                    <a href="#" className="discs__link">Диски</a>
                    <a href="#" className="discs__link">Шины</a>
                </nav>
                <div>
                <FontAwesomeIcon className='shares__font' icon={faClock}/>
                    <p className="shares__desc">Действует до:</p>
                    <p className="shares__date">30.09.2023</p>
                </div>
            </div>
        </div>
        <div className="d-flex justify-center">
            <button className="section__btn autotire_btn">Посмотреть все акции</button>
        </div>
    </div>
</section>        
    );
};

export default Shares;