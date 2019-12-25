import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import './Gnb.css'

class Gnb extends Component {

    render(){
        return(
            <Fragment>
                <div className="gnb_wrap">
                    <ul className="gnb_bar">
                        <li>Home</li>
                        <li><NavLink exact to ={"/cat_TmpProtection.js"}>임시 보호</NavLink></li>
                        <li>입양</li>
                        <li>중고</li>
                        <li>추천 상품</li>
                        <li>스토리 톡톡</li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Gnb;
