import React from 'react';

import {
    Route,
    HashRouter,
    hashHistory,
    Switch
} from 'react-router-dom';

import App from '../modules/App'
import About from '../modules/About'
import Repos from '../modules/Repos'
import Goodbye from './advanced/goodbye'
import Welcome from './advanced/welcome'
import BarAA from './bar01/barAA'
import MessageContainer from './dialog/'

import AbbottTest from './container01/AbbottTest'

class Basic extends React.Component {

    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('浏览器滚动123事件');
        console.log(e);
    }

    componentDidMount() {
        console.log(event);
        window.addEventListener('keyup',function(e) {
            switch (e.keyCode) {
                case 38:
                    //上
                    console.log('上');
                    console.log(e);
                    window.location.href = 'http://127.0.0.1:6600/#/'
                    break
                case 40:
                    //下
                    console.log('下');
                    console.log(e);
                    var docElm = document.documentElement;
                    //W3C
                    if (docElm.requestFullscreen) {
                        docElm.requestFullscreen();
                    }
                    //FireFox
                    else if (docElm.mozRequestFullScreen) {
                        docElm.mozRequestFullScreen();
                    }
                    //Chrome等
                    else if (docElm.webkitRequestFullScreen) {
                        docElm.webkitRequestFullScreen();
                    }
                    //IE11
                    else if (elem.msRequestFullscreen) {
                        elem.msRequestFullscreen();
                    }

                    break
                case 37:
                    //左
                    console.log('左');
                    console.log(e);
                    window.location.href = 'http://127.0.0.1:6600/#/about'
                    break

                case 39:
                    console.log('右');
                    console.log(e);
                    window.location.href = 'http://127.0.0.1:6600/#/repos'
                    break

                default:
                    break

            }
        })
    }

    render() {
        return(
            <HashRouter history={hashHistory}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                    <Route path="/god" component={Goodbye}/>
                    <Route path="/wel" component={Welcome}/>
                    <Route path="/baraa" component={BarAA}/>
                    <Route path="/age" component={MessageContainer}/>
                    <Route path="/test01" component={AbbottTest}/>

                </Switch>
            </HashRouter>
        )
    }
}

export default Basic;
