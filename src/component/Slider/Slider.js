import React, { Component } from 'react';
import './Slider.less';


class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:['我的任务', '个人信息', '团队信息'],
        }
    }

    render() {
        return(
            <div className="slider-wrap">
				{this.state.items.map((v, i) => {
                    return <a className="item" key={i} href="task">{v}</a>;
                })}             
		    </div>
        );
    }
}

export default Slider;