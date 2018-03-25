import React, { Component } from 'react';
import $ from 'jquery';
import './Login.less';
class Login extends Component {
	componentWillMount() {
		let h = window.innerHeight;
		$('body').height(h);
	}
	render() {
	  return (
		<div className="login-warp">
		  	hello
		</div>
	  );
	}
  }
  
export default Login;