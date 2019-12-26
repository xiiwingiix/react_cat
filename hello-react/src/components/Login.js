import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
  render(){
    return(
      <Fragment>
        <div className="loginClass">
          <form>
            <table>
            <tbody>
              <tr>
                <td>아이디</td>
                <td></td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td></td>
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