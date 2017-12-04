import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('baidu')
    }

    render() {
        let  warm = this.props.type;
        let message = this.props.message
        return (
            <div className='Message'>
                <RedComponent />
            </div>
        )
    }
}

/*
{do{
    if(warm == 'red') {
        <RedComponent message={message}/>;
    }else if(warm == 'blue') {
        <BlueComponent message={message}/>;
    }
}}
 */

class BlueComponent extends React.Component{
    state = {
        isShowingModal: true,
    }

    handleClick = () => this.setState({isShowingModal: true})

    handleClose = () => this.setState({isShowingModal: false})

    _init() {

        return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(doc);
            // 指定图表的配置项和数据
            var option = this.state.optionECharts;
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }).catch(error => 'An error occurred while loading the component');
    }

    render() {
        return (
            <div>

                    <ModalContainer onClose={this.handleClose} >
                        <ModalDialog onClose={this.handleClose}
                                     style={{backgroundColor:'blue',width:'300px',color:'#fff',cocheight:'100px',left:'70%',top:'82%',position:'fixed',opacity:0.6}}>
                            <h1>{this.props.message}</h1>
                            <p>More Content. Anything goes here</p>
                        </ModalDialog>
                    </ModalContainer>:''

            </div>
        )
    }
}

class RedComponent extends React.Component{
    state = {
        isShowingModal: true,
    }

    handleClick = () => this.setState({isShowingModal: true})
    handleClose = () => this.setState({isShowingModal: false})

    render() {
        return (
            <div>

                    <ModalContainer onClose={this.handleClose} >
                        <ModalDialog onClose={this.handleClose}
                                     style={{width:'500px',height:'250px',color:'#fff',backgroundColor:'red',opacity:0.6}}>
                            <h1>{this.props.message}</h1>
                            <p>More Content. Anything goes here</p>
                        </ModalDialog>
                    </ModalContainer>:''

            </div>
        )
    }
}
