import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/fire';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {window.location.href = "/dashboard";
        }).catch((error) => {
            console.log(error);
           });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {window.location.href = "/dashboard";
        }).catch((error) => {
            console.log(error);
           });
    }

    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        return (
            <div className="container" id="log">
                <form className="white">
                    <h5 className="alert alert-primary">SigIn and SignUp</h5>
                    <div class="form-group">
                        <label htmlFor="email">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} id="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} id="password" type="password" class="form-control" id="password" placeholder="Password" required />
                    </div>
                    <div>
                        <button onClick={this.login} className="btn pink lighten-1 z-depth-0">Login</button>
                        <button onClick={this.signup} className="btn pink lighten-1 z-depth-0 ml-1">SignUp</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;