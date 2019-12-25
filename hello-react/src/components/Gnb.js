import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Gnb.css'

class Gnb extends Component {

    render(){
        return(
            <Fragment>
                <div className="gnb_wrap">
                    <ul className="gnb_left">
                        <li><NavLink exact to ={"/main.js"}>Home</NavLink></li>
                        <li><NavLink to ={"/foster.js"}>임시 보호</NavLink></li>
                        <li><NavLink to ={"/adoption.js"}>입양</NavLink></li>
                        <li><NavLink to ={"/secondUse.js"}>중고물품</NavLink></li>
                        <li><NavLink to ={"/recommendation.js"}>추천 상품</NavLink></li>
                        <li><NavLink to ={"/talktalk.js"}>스토리 톡톡</NavLink></li>
                    </ul>
                    <ul className="gnb_right">
                        <li><NavLink to ={"/login.js"}>로그인</NavLink></li>
                        <li><NavLink to ={"/join.js"}>회원가입</NavLink></li>
                        
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Gnb;
