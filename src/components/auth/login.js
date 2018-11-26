import React, { Component } from 'react';
import fire from '../config/fire';

class Login extends Component{
    
    constructor(props){
        
        super(props);
        this.state = {
            email: '',
            password: '',
            e: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            const uid = fire.auth().currentUser.uid;
            window.location.href = "/form/" + uid;
        }).catch((error) => {
            this.setState({ e: error.message })
           });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            const uid = fire.auth().currentUser.uid;
            window.location.href = "/form/" + uid;
        }).catch((error) => {
            this.setState({ e: error.message })
           });
    }

    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        return (
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', minHeight : '45rem', marginTop: '50px'}}>
                <div className="container" id="log">
                    <form className="white">
                        <h5 className="alert alert-primary">SignIn and SignUp</h5>
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
                            <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>{this.state.e}</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;