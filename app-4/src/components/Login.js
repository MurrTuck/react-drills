import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
        this.thatsWhatSheSaid = this.thatsWhatSheSaid.bind(this)
    }

    usernameChange(user) {
        this.setState({ username: user })
    }

    passwordChange(pass) {
        this.setState({ password: pass })
    }

    thatsWhatSheSaid() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input onChange={e => this.usernameChange(e.target.value)} placeholder="Username..." type="text" />
                <input onChange={e => this.passwordChange(e.target.value)} placeholder="Password..." type="text" />
                <button onClick={this.thatsWhatSheSaid}>I dare you to push it!</button>
            </div>


        );
    }
}