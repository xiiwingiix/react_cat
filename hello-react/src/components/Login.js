import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Login.css';
import kakao from '../img/kakao.png';
import naver from '../img/naver.png';

class Login extends Component {
  render(){
    return(
      <Fragment>
        <div className="loginClass">
          <form>
            <table className="loginTable">
            <tbody>
              <tr>
                <td>아이디</td>
                <td><input name="id" id="id" type="text" className="id"></input></td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td><input name="pw" id="pw" type="text" className="pw"></input></td>
              </tr>
              <tr>
                <td height="50"></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="kakao"><img src={kakao} style={{width:25,height:25,marginRight:10}}/>카카오 아이디로 시작하기</button>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="naver"><img src={naver} style={{width:25,height:25,marginRight:10}}/>네이버 아이디로 시작하기</button>
                </td>
              </tr>
            </tbody>
            </table>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Login;