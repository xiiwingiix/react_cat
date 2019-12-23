import React from 'react';
import Swiper from 'swiper';

import './Main.css';

class Main extends React.Component {
    componentDidMount(){
      //임시 보호 swiper
      var swiper = new Swiper('.tmpProtection', {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    render(){
        return(
            <React.Fragment>
              <div className="main">
                <div className="swiper-container tmpProtection">
                    <h1 className="main_tit">보호가 필요해요!</h1>
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                    </ul>
                </div>
                <div className="swiper-container tmpProtection">
                    <h1 className="main_tit">새로운 가족을 찾아요!</h1>
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
                            <div className="area">경기</div>
                        </li>
                        <li className="swiper-slide">
                            <div className="img" style={{backgroundImage:"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
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