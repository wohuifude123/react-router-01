import React, {Component} from 'react'

import { Enhance } from './Enhance'

class Goodbye extends Component {

    constructor() {
        super();
        //localStorage.username='再见';
    }

    render() {
        return (
            <div>goodbye {this.props.username}</div>
        )
    }
}

Goodbye = Enhance(Goodbye);

export default Goodbye;
