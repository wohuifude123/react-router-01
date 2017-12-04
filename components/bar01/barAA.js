import React from 'react'

import { Foundation } from './foundation'


class BarAA extends React.Component {

    constructor() {
        super();
        //localStorage.username='再见';
        this.state = {
            // 总体类名
            className: 'dataECharts',
            // 外层样式
            style:{
                width: 600,
                height: 600,
            },
            // ECharts 样式
            optionECharts: {
                title: {
                    text: 'ECharts 人生无我世界'
                },
                tooltip: {},
                legend: {
                    data: ['无限']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "无敌"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20, 90]
                }]
            }
        }
    }

    render() {

        return (
            <div>baraaaaaaa</div>
        )
    }
}

BarAA = Foundation(BarAA);

export default BarAA;
