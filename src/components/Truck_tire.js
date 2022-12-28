import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage} from '@fortawesome/free-solid-svg-icons'
import { faSun} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck} from '@fortawesome/free-solid-svg-icons'
import tire from '../assets/images/tire.png'
import tractire from '../assets/images/Tract.jpeg'
const Truck_tire = () => {
    return (
        <section className="autotire">
    <div className="container">
        <div className="grid grid_col-4">
            <div className="autotire__card">
                <div className="autotire__img">
                    <img src={tractire} alt=""/>
                </div>
                <FontAwesomeIcon className='autotire__font' icon={faMessage}/>                
                <p className="autotire__desc">2</p>
                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5863 5.44033L8.00005 1L5.4138 5.44033L0.391602 6.52786L3.8154 10.3597L3.29777 15.4721L8.00005 13.4L12.7023 15.4721L12.1847 10.3597L15.6085 6.52786L10.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5863 5.44033L28.0001 1L25.4138 5.44033L20.3916 6.52786L23.8154 10.3597L23.2978 15.4721L28.0001 13.4L32.7023 15.4721L32.1847 10.3597L35.6085 6.52786L30.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5863 5.44033L48.0001 1L45.4138 5.44033L40.3916 6.52786L43.8154 10.3597L43.2978 15.4721L48.0001 13.4L52.7023 15.4721L52.1847 10.3597L55.6085 6.52786L50.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.5863 5.44033L68.0001 1L65.4138 5.44033L60.3916 6.52786L63.8154 10.3597L63.2978 15.4721L68.0001 13.4L72.7023 15.4721L72.1847 10.3597L75.6085 6.52786L70.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5863 5.44033L88.0001 1L85.4138 5.44033L80.3916 6.52786L83.8154 10.3597L83.2978 15.4721L88.0001 13.4L92.7023 15.4721L92.1847 10.3597L95.6085 6.52786L90.5863 5.44033ZM93.7189 7.14185L89.944 6.32441L88.0001 2.98689V12.3072L91.5345 13.8647L91.1454 10.022L93.7189 7.14185Z" fill="#EFD8C3"/>
                </svg>
                <h2 className="section_title autotire_title">Goodyear Vector 4Seasons</h2>
                <FontAwesomeIcon className='autotire__check' icon={faSun}/>
                <FontAwesomeIcon className='autotire_check' icon={faSquareCheck}/>
                <p className="section_desc">В наличии: 14 шт.</p>
                <div className="d-flex">
                    <button className="autotire__btn">5 600 ₽</button>
                    <FontAwesomeIcon className='autotire__save' size='lg' icon={faBookmark}/>                
                </div>
            </div>
            <div className="autotire__card">
                <div className="autotire__img">
                    <img src={tractire} alt=""/>
                </div>
                <FontAwesomeIcon className='autotire__font' icon={faMessage}/>                
                <p className="autotire__desc">2</p>
                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clip-rule="evenodd" d="M10.5863 5.44033L8.00005 1L5.4138 5.44033L0.391602 6.52786L3.8154 10.3597L3.29777 15.4721L8.00005 13.4L12.7023 15.4721L12.1847 10.3597L15.6085 6.52786L10.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fillRule="evenodd" clip-rule="evenodd" d="M30.5863 5.44033L28.0001 1L25.4138 5.44033L20.3916 6.52786L23.8154 10.3597L23.2978 15.4721L28.0001 13.4L32.7023 15.4721L32.1847 10.3597L35.6085 6.52786L30.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fillRule="evenodd" clip-rule="evenodd" d="M50.5863 5.44033L48.0001 1L45.4138 5.44033L40.3916 6.52786L43.8154 10.3597L43.2978 15.4721L48.0001 13.4L52.7023 15.4721L52.1847 10.3597L55.6085 6.52786L50.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fillRule="evenodd" clip-rule="evenodd" d="M70.5863 5.44033L68.0001 1L65.4138 5.44033L60.3916 6.52786L63.8154 10.3597L63.2978 15.4721L68.0001 13.4L72.7023 15.4721L72.1847 10.3597L75.6085 6.52786L70.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fillRule="evenodd" clip-rule="evenodd" d="M90.5863 5.44033L88.0001 1L85.4138 5.44033L80.3916 6.52786L83.8154 10.3597L83.2978 15.4721L88.0001 13.4L92.7023 15.4721L92.1847 10.3597L95.6085 6.52786L90.5863 5.44033ZM93.7189 7.14185L89.944 6.32441L88.0001 2.98689V12.3072L91.5345 13.8647L91.1454 10.022L93.7189 7.14185Z" fill="#EFD8C3"/>
                </svg>
                <h2 className="section_title autotire_title">Goodyear Vector 4Seasons SUV Gen-2</h2>
                <FontAwesomeIcon className='autotire__checkin' icon={faSun}/>
                <FontAwesomeIcon className='autotire_checkin' icon={faSquareCheck}/>
                <p className="section_desc">В наличии: 14 шт.</p>
                <div className="d-flex">
                    <button className="autotire__btn">5 600 ₽</button>
                    <FontAwesomeIcon className='autotire__save' size='lg' icon={faBookmark}/>                
                </div>            
                </div>
            <div className="autotire__card">
                <div className="autotire__img">
                    <img src={tractire} alt=""/>
                </div>
                <FontAwesomeIcon className='autotire__font' icon={faMessage}/>                
                <p className="autotire__desc">2</p>
                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5863 5.44033L8.00005 1L5.4138 5.44033L0.391602 6.52786L3.8154 10.3597L3.29777 15.4721L8.00005 13.4L12.7023 15.4721L12.1847 10.3597L15.6085 6.52786L10.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5863 5.44033L28.0001 1L25.4138 5.44033L20.3916 6.52786L23.8154 10.3597L23.2978 15.4721L28.0001 13.4L32.7023 15.4721L32.1847 10.3597L35.6085 6.52786L30.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5863 5.44033L48.0001 1L45.4138 5.44033L40.3916 6.52786L43.8154 10.3597L43.2978 15.4721L48.0001 13.4L52.7023 15.4721L52.1847 10.3597L55.6085 6.52786L50.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.5863 5.44033L68.0001 1L65.4138 5.44033L60.3916 6.52786L63.8154 10.3597L63.2978 15.4721L68.0001 13.4L72.7023 15.4721L72.1847 10.3597L75.6085 6.52786L70.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5863 5.44033L88.0001 1L85.4138 5.44033L80.3916 6.52786L83.8154 10.3597L83.2978 15.4721L88.0001 13.4L92.7023 15.4721L92.1847 10.3597L95.6085 6.52786L90.5863 5.44033ZM93.7189 7.14185L89.944 6.32441L88.0001 2.98689V12.3072L91.5345 13.8647L91.1454 10.022L93.7189 7.14185Z" fill="#EFD8C3"/>
                </svg>
                <h2 className="section_title autotire_title">Cordiant Snow Cross 2</h2>
                <FontAwesomeIcon className='autotire__check' icon={faSun}/>
                <FontAwesomeIcon className='autotire_check' icon={faSquareCheck}/>
                <p className="section_desc">В наличии: 14 шт.</p>
                <div className="d-flex">
                    <button className="autotire__btn">5 600 ₽</button>
                    <FontAwesomeIcon className='autotire__save' size='lg' icon={faBookmark}/>                
                </div>            </div>
            <div className="autotire__card">
                <div className="autotire__img">
                    <img src={tractire} alt=""/>
                </div>
                <FontAwesomeIcon className='autotire__font' icon={faMessage}/>                
                <p className="autotire__desc">2</p>
                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5863 5.44033L8.00005 1L5.4138 5.44033L0.391602 6.52786L3.8154 10.3597L3.29777 15.4721L8.00005 13.4L12.7023 15.4721L12.1847 10.3597L15.6085 6.52786L10.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5863 5.44033L28.0001 1L25.4138 5.44033L20.3916 6.52786L23.8154 10.3597L23.2978 15.4721L28.0001 13.4L32.7023 15.4721L32.1847 10.3597L35.6085 6.52786L30.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5863 5.44033L48.0001 1L45.4138 5.44033L40.3916 6.52786L43.8154 10.3597L43.2978 15.4721L48.0001 13.4L52.7023 15.4721L52.1847 10.3597L55.6085 6.52786L50.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.5863 5.44033L68.0001 1L65.4138 5.44033L60.3916 6.52786L63.8154 10.3597L63.2978 15.4721L68.0001 13.4L72.7023 15.4721L72.1847 10.3597L75.6085 6.52786L70.5863 5.44033Z" fill="#EFD8C3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5863 5.44033L88.0001 1L85.4138 5.44033L80.3916 6.52786L83.8154 10.3597L83.2978 15.4721L88.0001 13.4L92.7023 15.4721L92.1847 10.3597L95.6085 6.52786L90.5863 5.44033ZM93.7189 7.14185L89.944 6.32441L88.0001 2.98689V12.3072L91.5345 13.8647L91.1454 10.022L93.7189 7.14185Z" fill="#EFD8C3"/>
                </svg>
                <h2 className="section_title autotire_title">Pirelli PZero</h2>
                <FontAwesomeIcon className='autotire__fonts' icon={faSun}/>
                <FontAwesomeIcon className='autotire_fonts' icon={faSquareCheck}/>
                <p className="section_desc">В наличии: 14 шт.</p>
                <div className="d-flex">
                    <button className="autotire__btn">5 600 ₽</button>
                    <FontAwesomeIcon className='autotire__save' size='lg' icon={faBookmark}/>                
                </div>
            </div>
        </div>
        <div className="d-flex justify-center">
            <button className="section__btn autotire_btn">Посмотреть все шины</button>
        </div>
    </div>
</section>
    );
};

export default Truck_tire;