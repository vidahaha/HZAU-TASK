import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import host from '@/host.js';
import Cookies from "js-cookie";
import { BrowserRouter } from 'react-router-dom';
import './Login.less';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
		};
	}

	componentWillMount() {
		let h = window.innerHeight;
		$('body').height(h);
	}

	handleName = (e) => {
		this.setState({
			name: e.target.value,
		});
	}

	handlePassword = (e) => {
		this.setState({
			password: e.target.value,
		});
	}

	loginSubmit = (e) => {
		e.preventDefault();
		let {name, password} = this.state;

		if( name.length === 0 || password.length === 0 ) {
			alert('请输入完整');
			return false;
		}
	
		let csrftoken = Cookies.get('csrfToken');
		axios.defaults.withCredentials = true
		axios.defaults.headers.post['x-csrf-token'] = csrftoken;
	
		// axios({
		// 	method: "POST",
		// 	url: host +'login',
		// 	data:{
		// 		name,
		// 		password,
		// 	},
		// });



	}

	render() {
	  return (
		<div className="login-warp">
		  <div className="login-window">
				<div className="title">项目管理系统</div>
				<input placeholder="请输入你的名字" autoComplete="off" value={this.state.name} onChange={this.handleName} />
				<input type="password" placeholder="请输入你的密码" autoComplete="off" value={this.state.password} onChange={this.handlePassword}/>
				<input id="submit" type="submit" value="登录" onClick={this.loginSubmit}/>
			</div>
		</div>
	  );
	}
}
  
export default Login;