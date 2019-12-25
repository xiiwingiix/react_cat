import React from 'react';
import Swiper from 'swiper';

import '../css/Main.css';
import banner_01 from '../img/banner_01.jpg';
import banner_02 from '../img/banner_02.png';

class Main extends React.Component {
    componentDidMount(){
      //임시 보호 swiper
      var multiple_swiper = new Swiper('.multiple', {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });

      var Main_banner = new Swiper('.Main_banner', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
    render(){
        return(
            <React.Fragment>
              <div className="main">
                <div className="swiper-container Main_banner">
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide"><img src={banner_01}/></li>
                        <li className="swiper-slide"><img src={banner_02}/></li>
                    </ul>
                    {/* Add Pagination */}
                    <div className="swiper-pagination"></div>
                    {/* Add Arrows */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                
                <div className="swiper-container multiple">
                    <h1 className="main_tit">보호가 필요해요!</h1>
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/3b/57/b7/3b57b7c031dabb1b233f25b1bcadfb60.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/26/c9/a7/26c9a7986008a87226f92b73fcf3fdcb.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/cd/d8/f5/cdd8f5f2c19f083f661a0700212d44d4.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/3a/45/75/3a4575f4c27f05cf4d03989ecac701b4.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                    </ul>
                </div>
                <div className="swiper-container multiple">
                    <h1 className="main_tit">새로운 가족을 찾아요!</h1>
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ab/a7/ce/aba7ce37852157a1c686416523178035.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/22/73/93/227393359560902cd9d32235789d1a7c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/83/51/62/835162fdc62fb9a40f0b3947f3273d5e.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ec/fe/7f/ecfe7f475c82793b1fdf2452f65b86aa.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/96/7b/1f/967b1fe59eb9dc8d4e451f34d0bff78c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/3c/6a/e6/3c6ae6bd16fbd3476f7cdadeb4c75b4a.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                    </ul>
                </div>
              </div>
            </React.Fragment>
        )
    }
}

export default Main 