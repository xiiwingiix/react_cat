import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import './Gnb.css'

class Gnb extends Component {

    render(){
        return(
            <Fragment>
                <ul className="gng_bar">
                    <li>Home</li>
                    <li>임시 보호</li>
                </ul>
            </Fragment>
        );
    }
}

export default Gnb;
