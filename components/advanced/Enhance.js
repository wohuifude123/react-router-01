import React, {Component} from 'react'

// A higher-order component is a function that takes a component and returns a new component.

export const Enhance = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: ''
            }
            localStorage.username='公共';
        }

        componentWillMount() {
            let username = localStorage.getItem('username');
            console.log(username)
            this.setState({
                username: username
            })
        }

        render() {
            return <WrappedComponent username={this.state.username}/>
        }
    }

    return NewComponent
}



