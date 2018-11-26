import React, { Component } from 'react'
import './navbar.css'
import fire from '../config/fire'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap' 

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {},
            email : '',
            popoverOpen: false
        }
        this.userListener = this.userListener.bind(this);
        this.logout = this.logout.bind(this);
        this.toggle = this.toggle.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.dash = this.dash.bind(this);
        this.form = this.form.bind(this);
    }

    componentWillMount(){
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

    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }

    deleteUser(){
        const user = fire.auth().currentUser;
        fire.database().ref("users" + user.uid).child('user').remove();
        user.delete().then(() => { 
            console.log(`O usuario ${user.email} foi deletado`)}).catch ((error) => { console.log("Erro ao deletar usuario!") })
    }

    dash(){
        const uid = fire.auth().currentUser.uid;
        window.location.href = "/dashboard/" + uid;
    }

    form(){
        const uid = fire.auth().currentUser.uid;
        window.location.href = "/form/" + uid;
    }

    render(){
        return (
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    {this.state.user ?
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a onClick={this.dash} className="ml-4 nav-link" style={{cursor: 'pointer'}}>Home<span className="sr-only">(current)</span></a>
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
                        </ul> : <ul></ul>
                    }
                    {this.state.user ? <div>
                                        <button id="popover" onMouseEnter={this.toggle} class="user btn btn-lg btn-danger">{this.state.email}</button>
                                        <Popover placement="bottom" isOpen={this.state.popoverOpen} onMouseLeave={this.toggle} target="popover" toggle={this.toggle}>
                                            <PopoverHeader>Conta</PopoverHeader>
                                            <PopoverBody>
                                                <div style={{display: "flex", flexDirection: "column"}}>
                                                    <button onClick={this.deleteUser} className="btn btn-light">Excluir Conta</button>
                                                    <button onClick={this.form} className="btn btn-light mt-1">Atualizar Dados</button>
                                                    <button onClick={this.logout} className="btn btn-light mt-1">Logout</button>
                                                </div>
                                            </PopoverBody>
                                        </Popover></div> : <button class="hidden"></button>
                    }
                </div>
                </nav>
        )
    };
}

export default NavBar