import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import fire from '../config/fire'


class NavBar extends Component {

    state = {
        user: {},
        email : ''
    }

    componentDidMount(){
        this.userListener();
    }

    userListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ user: user });
                const em = user.email.charAt(0).toUpperCase();
                this.setState({ email : em });
            }else{
                this.setState({ user: null });
            }
        });
    }

    logout(e){
        fire.auth().signOut();
        window.location.href = "/";
    }

    render(){
        return (
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/dashboard" className="ml-4 nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#perfil">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#habilidades">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#trabalhos">Trabalhos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#infos">Infos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                    {this.state.user ? <button class="user btn btn-lg btn-danger">{this.state.email}</button> : <button class="hidden"></button>}
                    {this.state.user? <button onClick={this.logout} className="btn btn-light ml-1">Logout</button> : <button className="hidden"></button>}
                </div>
                </nav>
        )
    };
}

export default NavBar