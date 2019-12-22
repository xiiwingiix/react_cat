import React from 'react';
import './Main.css'

class Main extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div>
                    <h1 className="main_tit">보호가 필요해요!</h1>
                    <ul>
                        <li>
                            <div className="img"></div>
                            <div className="tit">페르시안 </div>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Main 