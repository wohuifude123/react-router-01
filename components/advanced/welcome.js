import React, {Component} from 'react';
import {Enhance} from './Enhance';

/*
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        localStorage.username="欢迎";
    }

    componentWillMount() {
        let username = localStorage.getItem('username');
        this.setState({
            username: username
        })
    }

    render() {
        return (
            <div>welcome {this.state.username}</div>
        )
    }
}

export default Welcome;
*/



class Welcome extends Component {

    constructor() {
        super();
        //localStorage.username='欢迎';
    }

    render() {
        return (
            <div>welcome {this.props.username}</div>
        )
    }
}

Welcome = Enhance(Welcome);

export default Welcome;
