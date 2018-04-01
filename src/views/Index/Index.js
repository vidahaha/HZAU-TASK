import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import host from '@/host.js';
import Cookies from "js-cookie";
import './Index.less';
import Slider from '@/component/Slider/Slider';

class Index extends Component {

	componentWillMount() {

	}

	render() {
	  return (
		<div className="Index-wrap">
      <Slider className="index-slide"></Slider>
		</div>
	  );
	}
}
  
export default Index;