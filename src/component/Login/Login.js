import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import host from '@/host.js';
import Cookies from "js-cookie";
import './Login.less';

class Login extends Component {

	componentWillMount() {
		let h = window.innerHeight;
		$('body').height(h);
	}


	loginSubmit = (e) => {
		let name = $('#username').val();  // jquery dom 方便一些
		//let username = ReactDom.findDOMNode(this.refs.username).value;  // react dom
		let password = $('#password').val();

		if( name.length === 0 || password.length === 0 ) {
			alert('请输入完整');
			return false;
		}
	
		let csrftoken = Cookies.get('csrfToken');
		axios.defaults.withCredentials = true
		axios.defaults.headers.post['x-csrf-token'] = csrftoken;
	
		axios({
			method: "POST",
			url: host +'login',
			data:{
				name,
				password,
			},
			// crossDomain: true,
		});
	}

	render() {
	  return (
		<div className="login-warp">
		  <div className="login-window">
				<div className="title">项目管理系统</div>
				<input id="username" name="username" ref="username" placeholder="请输入你的名字" autoComplete="off"/>
				<input id="password" name="password" type="password" placeholder="请输入你的密码" autoComplete="off"/>
				<input id="submit" type="submit" value="登录" onClick={this.loginSubmit}/>
			</div>
		</div>
	  );
	}
  }
  
export default Login;