import React from 'react'

import { Message } from './Message'


class MessageContainer extends React.Component {

    constructor() {
        super();
        //localStorage.username='再见';

    }

    render() {

        return (
            <div>
                <Message />
            </div>
        )
    }
}



export default MessageContainer;
