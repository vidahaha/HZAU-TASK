import React, { Component } from 'react';
import './Slider.less';


class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[{
                name: '我的任务',
                list: ['待完成的任务', '所有任务记录', '我分配的任务'],
            }, {
                name: '个人信息',
                list: ['学习记录'],                
            }, {
                name: '团队信息',
                list: ['团队整体记录'],
            }],
        }
    }

    render() {
        return(
            <div className="slider-wrap">
				{this.state.items.map((v, i) => {
                    return (
                        <li className="item" key={i}>
                            <a href="task">{v.name}</a>
                            <div className="item-list">
                                {v.list.map((l, i) => {
                                    return (
                                        <a key={i}>{l}</a>
                                    )
                                })}
                            </div>
                        </li>    
                    );
                })}             
		    </div>
        );
    }
}

export default Slider;