import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"


import cat from '../assets/images/cat.png'

const Footer = () => {
    return (
<footer className="footer">
    <div className="container">
        <div>
            <svg class="footer__svg" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.14962 64V43.5545C0.761381 39.9705 0 36.0742 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 36.0742 63.2386 39.9705 61.8504 43.5545V64H32H2.14962ZM15.7525 42.2107H23.0117L24.9778 40.587C25.5052 40.1514 25.8296 38.9331 25.8133 38.3763C25.8002 37.9309 25.4651 37.4177 25.2992 37.2168C25.1333 37.0159 24.6927 36.5898 24.2578 36.4928C23.7141 36.3716 22.4564 36.4598 21.929 36.8954L19.4052 38.9797C18.6081 39.638 17.0883 40.9986 15.7525 42.2107ZM30.8275 40.8427C30.6977 40.9843 30.3523 41.4991 29.8958 42.2107H34.0065C33.5499 41.4991 33.2046 40.9843 33.0748 40.8427C33.0386 40.8032 33.0041 40.7654 32.9712 40.7294C32.5163 40.231 32.3612 40.0611 31.9511 40.0611C31.5411 40.0611 31.386 40.231 30.9311 40.7294L30.9299 40.7307C30.8974 40.7663 30.8633 40.8037 30.8275 40.8427ZM40.844 42.2107H48.1032C46.7674 40.9986 45.2476 39.638 44.4505 38.9797L41.9266 36.8954C41.3992 36.4598 40.1415 36.3716 39.5979 36.4928C39.1629 36.5898 38.7224 37.0159 38.5564 37.2168C38.3905 37.4177 38.0554 37.9309 38.0424 38.3763C38.0261 38.9331 38.3505 40.1514 38.8779 40.587L40.844 42.2107ZM26.2351 11.0412C27.6031 13.2885 30.3976 17.8516 30.8275 18.3206C30.8458 18.3405 30.8636 18.36 30.881 18.3791C30.8981 18.3978 30.9148 18.4161 30.9311 18.434C31.386 18.9323 31.5411 19.1023 31.9511 19.1023C32.3612 19.1023 32.5163 18.9323 32.9712 18.434L32.9716 18.4336L32.9726 18.4324L32.9727 18.4323C33.0051 18.3968 33.0391 18.3595 33.0748 18.3206C33.5047 17.8516 36.2992 13.2885 37.6672 11.0412C36.9637 10.7676 34.5893 10.3084 31.9511 10.3084C29.313 10.3084 26.9386 10.7676 26.2351 11.0412ZM22.5199 12.3598L20.632 13.2813C21.3372 14.9486 22.9232 18.6432 23.6262 20.0832L25.0621 23.0247C25.3621 23.6394 26.4707 24.2399 27.0159 24.3543C27.452 24.4459 28.0293 24.2402 28.2635 24.1259C28.4976 24.0116 29.0149 23.6829 29.211 23.2828C29.4561 22.7826 29.6646 21.5391 29.3646 20.9245L27.9287 17.9829C27.2258 16.5429 25.2885 13.0198 24.4077 11.4382L22.5199 12.3598ZM10.7952 27.0538L10.3251 29.1013C12.0651 29.601 15.9354 30.69 17.4972 31.0485L20.6875 31.7809C21.3542 31.934 22.5181 31.4493 22.9498 31.0972C23.2951 30.8156 23.4981 30.2373 23.5564 29.9833C23.6147 29.7294 23.6843 29.1205 23.4963 28.7164C23.2614 28.2113 22.4254 27.2676 21.7588 27.1145L18.5685 26.3821C17.0067 26.0236 13.0489 25.3155 11.2652 25.0063L10.7952 27.0538ZM53.5348 29.1013L53.0647 27.0538L52.5947 25.0063C50.811 25.3155 46.8533 26.0236 45.2914 26.3821L42.1011 27.1145C41.4345 27.2676 40.5985 28.2113 40.3636 28.7164C40.1757 29.1205 40.2453 29.7294 40.3036 29.9833C40.3619 30.2373 40.5648 30.8156 40.9102 31.0972C41.3418 31.4493 42.5058 31.934 43.1724 31.7809L46.3627 31.0485C47.9245 30.69 51.7948 29.601 53.5348 29.1013ZM41.3116 12.3598L43.1995 13.2813C42.4943 14.9486 40.9083 18.6432 40.2054 20.0832L38.7695 23.0247C38.4694 23.6394 37.3608 24.2399 36.8157 24.3543C36.3796 24.4459 35.8022 24.2402 35.5681 24.1259C35.3339 24.0116 34.8166 23.6829 34.6205 23.2828C34.3754 22.7826 34.1669 21.5391 34.4669 20.9245L35.9028 17.9829C36.6058 16.5429 38.543 13.0198 39.4238 11.4382L41.3116 12.3598ZM12.0046 23.2643C14.6143 23.5981 19.9236 24.2627 20.5584 24.2195C20.6099 24.216 20.659 24.2127 20.706 24.2096L20.7084 24.2095L20.7106 24.2093L20.7116 24.2093C21.3849 24.1649 21.6145 24.1498 21.8705 23.8294C22.1264 23.509 22.0904 23.2818 21.9849 22.6153C21.9773 22.5671 21.9693 22.5166 21.961 22.4636C21.8629 21.835 20.0419 16.8036 19.1398 14.3322C18.4869 14.7111 16.6462 16.2796 14.9996 18.3408C13.3531 20.4021 12.23 22.5438 12.0046 23.2643ZM43.3068 24.2195C43.9416 24.2627 49.2509 23.5981 51.8606 23.2643C51.6352 22.5438 50.5121 20.4021 48.8656 18.3408C47.219 16.2796 45.3783 14.7111 44.7254 14.3322C43.8233 16.8036 42.0023 21.835 41.9042 22.4636C41.9005 22.487 41.8969 22.51 41.8934 22.5324C41.8895 22.557 41.8857 22.581 41.882 22.6045L41.8815 22.6072L41.8809 22.6115L41.8803 22.6153C41.7748 23.2818 41.7388 23.509 41.9947 23.8294C42.2507 24.1498 42.4803 24.1649 43.1536 24.2093C43.2023 24.2125 43.2533 24.2158 43.3068 24.2195ZM53.6708 30.8773C51.1867 31.7442 46.1396 33.5209 45.5909 33.843C45.5447 33.8702 45.5005 33.896 45.4584 33.9206C44.8758 34.261 44.6771 34.3771 44.5912 34.778C44.5053 35.179 44.639 35.3662 45.031 35.9154L45.0335 35.9189C45.0611 35.9576 45.09 35.998 45.1202 36.0405C45.4887 36.5591 49.3652 40.2474 51.2761 42.0558C51.691 41.4252 52.6374 39.1997 53.19 36.62C53.7426 34.0404 53.7909 31.6225 53.6708 30.8773ZM18.2743 33.843C17.7256 33.5209 12.6784 31.7442 10.1944 30.8773C10.0743 31.6225 10.1226 34.0404 10.6752 36.62C11.2278 39.1997 12.1742 41.4252 12.5891 42.0558C14.5 40.2474 18.3765 36.5591 18.745 36.0405C18.7552 36.0261 18.7653 36.012 18.7752 35.9981C18.7949 35.9704 18.814 35.9437 18.8325 35.9177L18.8342 35.9154C19.2262 35.3662 19.3599 35.179 19.274 34.778C19.1881 34.3771 18.9894 34.261 18.4068 33.9206L18.3595 33.8929C18.3319 33.8768 18.3035 33.8602 18.2743 33.843ZM35.8595 31.9511C35.8595 34.1097 34.1097 35.8595 31.9511 35.8595C29.7926 35.8595 28.0428 34.1097 28.0428 31.9511C28.0428 29.7926 29.7926 28.0427 31.9511 28.0427C34.1097 28.0427 35.8595 29.7926 35.8595 31.9511ZM52.7634 44.5557H53.4473C53.4473 44.7186 53.5744 45.0443 54.0824 45.0443C54.5905 45.0443 54.6524 44.7186 54.6198 44.5557H55.3038C55.3364 44.914 55.1377 45.6305 54.0824 45.6305C53.0272 45.6305 52.7634 44.914 52.7634 44.5557ZM51.7863 46.1191H50.8092V51.2977H51.5908H51.7863H52.1771L56.3786 47.1939H56.4763V51.2977H57.4534V46.1191H56.8183H56.4763H56.2809L52.0794 50.2229H51.7863V46.1191ZM16.7084 46.1191H17.6855V50.2229H17.8809L22.0824 46.1191H22.4733H22.6198H23.4504V51.2977H22.4733V47.1939H22.1802L17.9786 51.2977H17.6855H17.3924H16.7084V46.1191ZM50.7603 56.0855H51.7863V55.8901C51.7863 55.4584 52.1362 55.1084 52.5679 55.1084H56.4763C56.8541 55.1084 57.1603 55.4146 57.1603 55.7924V56.0855C57.1603 56.4632 56.8541 56.7695 56.4763 56.7695H52.4702V57.7466H56.4763C56.8541 57.7466 57.1603 58.0528 57.1603 58.4305V58.8214C57.1603 59.1991 56.8541 59.5053 56.4763 59.5053H52.5679C52.1362 59.5053 51.7863 59.1554 51.7863 58.7237V58.4794H50.7603V59.1145C50.7603 59.816 51.329 60.3847 52.0305 60.3847H57.0137C57.7153 60.3847 58.284 59.8161 58.284 59.1146V58.3328C58.284 57.3557 57.1603 57.2092 57.1603 57.2092C57.1603 57.2092 58.284 57.0137 58.284 56.0855V55.4015C58.284 54.7 57.7153 54.1313 57.0137 54.1313H52.0305C51.329 54.1313 50.7603 54.7 50.7603 55.4015V56.0855ZM14.6565 55.1084H13.7771V60.3847H14.4611H14.6565H19.8351V59.6031H14.6565V58.1374H19.8351V57.3557H14.6565V55.8901H19.8351V55.1084H14.6565ZM5.47176 55.1084H6.35115V59.6031H11.1389V55.1084H12.0183V59.6031H12.6046V60.0916V60.3847V61.1664H11.6275V60.3847H11.1389H6.35115H5.8626H5.47176V55.1084ZM25.7954 46.1191H24.8183V51.2977H25.7954V49.0504H30.4855V51.2977H31.4626V46.1191H30.4855V48.2687H25.7954V46.1191ZM21.3008 55.1084H22.2779V57.258H26.9679V55.1084H27.945V60.3847H26.9679V58.1374H22.2779V60.3847H21.3008V55.1084ZM29.2153 55.8901V55.1084H31.9511H32.9282H35.8595V55.8901H32.9282V60.3847H31.9511V55.8901H29.2153ZM32.8305 46.1191H33.8076V48.2687H38.4977V46.1191H39.4748V51.2977H38.4977V49.0504H33.8076V51.2977H32.8305V46.1191ZM49.3435 46.1191H48.3664V51.2977H49.3435V46.1191ZM6.35115 46.1191H7.23053V50.516H10.3573V46.1191H11.2366V50.516H14.3634V46.1191H15.2427V51.2977H14.5588H14.3634H11.2366H10.3573H7.23053H6.35115V50.516V46.1191ZM41.8198 46.1191H40.8427V51.2977H41.8198V51.2782C41.883 51.291 41.9483 51.2977 42.0153 51.2977H46.3145C46.8541 51.2977 47.2916 50.8602 47.2916 50.3206V48.171C47.2916 47.6314 46.8541 47.1939 46.3145 47.1939H42.0153C41.9483 47.1939 41.883 47.2006 41.8198 47.2134V46.1191ZM41.8198 47.9756V50.516H45.9237C46.1395 50.516 46.3145 50.341 46.3145 50.1252V48.3664C46.3145 48.1506 46.1395 47.9756 45.9237 47.9756H41.8198ZM37.1298 60.3847H38.1069V59.1927C38.17 59.2055 38.2354 59.2122 38.3023 59.2122H42.6015C43.1412 59.2122 43.5786 58.7747 43.5786 58.2351V56.0855C43.5786 55.5459 43.1412 55.1084 42.6015 55.1084H38.3023C38.2354 55.1084 38.17 55.1151 38.1069 55.1279V55.1084H37.1298V60.3847ZM38.1069 55.8901V58.4305H42.2107C42.4265 58.4305 42.6015 58.2555 42.6015 58.0397V56.2809C42.6015 56.0651 42.4265 55.8901 42.2107 55.8901H38.1069ZM49.2458 54.229H46.6076V55.1084H48.171V60.3847H49.2458V55.1084V54.5221V54.229Z" fill="#1A1E29"/>
            </svg>

            <svg width="1280" height="97" viewBox="0 0 1280 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1280 0.5C1280 0.223858 1279.78 0 1279.5 0H0.5C0.223858 0 0 0.223858 0 0.5V0.5C0 0.776142 0.22386 1 0.500002 1H576C584.837 1 592 8.16344 592 17V81C592 89.8366 599.163 97 608 97H672C680.837 97 688 89.8366 688 81V17C688 8.16344 695.163 1 704 1H1279.5C1279.78 1 1280 0.776142 1280 0.5V0.5Z" fill="#E5E5E5"/>
            </svg>
        </div>
        <div className="grid grid_col-5">
            <div className="footer__products">
                <h2 className="footer__title">????????????</h2>
                <nav className="footer__nav">
                    <a href="#" className="footer__link">?????????????????????????? ????????</a>
                    <a href="#" className="footer__link">?????????????????????????? ??????????</a>
                    <a href="#" className="footer__link">???????????????????? ?????? ??????, ???????????? ?? ??????????????????????</a>
                    <a href="#" className="footer__link">????????????????????????</a>
                    <a href="#" className="footer__link">??????????????????</a>
                    <a href="#" className="footer__link">????????????????????????</a>
                    <a href="#" className="footer__link">??????????????????????????????</a>
                    <a href="#" className="footer__link">??????????????????
                        ?? ??????????????????????????</a>
                    <a href="#" className="footer__link">?????????????? ??????????, ????????????, ????????????</a>
                    <a href="#" className="footer__link">??????????????????????
                        ?? ?????????????????????? ????????????</a>
                    <a href="#" className="footer__link">??????????????????????</a>
                </nav>
            </div>
            <div className="footer__services">
                <h2 className="footer__title">????????????</h2>
                <nav className="footer__nav">
                    <a href="#" className="footer__link">????????????????????</a>
                    <a href="#" className="footer__link">?????? ?????? ??????????????????????</a>
                    <a href="#" className="footer__link">???????????? ?? ???????????? ????????????</a>
                    <a href="#" className="footer__link">???????????????? ???????????? ??????</a>
                    <a href="#" className="footer__link">???????????????? ????????????????</a>
                    <a href="#" className="footer__link">???????????? ??????</a>
                    <a href="#" className="footer__link">????????-????????????</a>
                    <a href="#" className="footer__link">???????????????????????? ????????????</a>
                </nav>
            </div>
            <div className="footer__contact">
                <p className="footer__number">8 800 888-88-88</p>
                <p className="section_desc footer__desc">???????????? ????????????????????</p>
                <button className="section__btn footer__btn">???????????????? ???????????????? ????????????</button>
                <p className="section_desc footer__desc">???? ?? ???????????????????? ??????????</p>
                <FontAwesomeIcon className='footer__fonts' icon={faInstagram}/>
                <FontAwesomeIcon className='footer__fonts' icon={faTwitter}/>
                <FontAwesomeIcon className='footer__fonts' icon={faWhatsapp}/>

                <p className="section_desc footer__desc">???????????????? ?? ?????????????????????? ??????????</p>
                <div className="footer__img">
                    <img src={cat} alt="" />
                </div>
                <p className="section_title footer__long">???????? ??????</p>
            </div>
            <div className="footer__company">
                <h2 className="footer__title">????????????????</h2>
                <nav className="footer__nav">
                    <a href="#" className="footer__link">?? ????????????????</a>
                    <a href="#" className="footer__link">????????????</a>
                    <a href="#" className="footer__link">????????????????</a>
                    <a href="#" className="footer__link">???????????? ?? ??????????????</a>
                    <a href="#" className="footer__link">?????????? ?? ????????????</a>
                    <a href="#" className="footer__link">????????????????</a>
                    <a href="#" className="footer__link">????????????</a>
                    <a href="#" className="footer__link">????????????????</a>
                    <a href="#" className="footer__link">???????????????????? ??????????????????????</a>
                    <a href="#" className="footer__link">?????????????? ????????????????</a>
                    <a href="#" className="footer__link">?????????????? ????????????</a>
                </nav>
            </div>
            <div className="footer__personal">
                <h2 className="footer__title">???????????? ??????????????</h2>
                <nav className="footer__nav">
                    <a href="#" className="footer__link">??????????????</a>
                    <a href="#" className="footer__link">??????????</a>
                    <a href="#" className="footer__link">??????????</a>
                </nav>
            </div>
        </div>
    </div>
</footer>

    );
};

export default Footer;