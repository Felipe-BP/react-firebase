import React, { Component } from 'react'
import './infos.css'

class Infos extends Component {

    constructor(props){
        super(props)
    }
    

    render(){
        const {biografia} = this.props
        const {profissao} = this.props
        return (
            <div className="container">
                <div className="item">
                    <span>
                        <img src="/assets/heart-icon.png" alt="icone biografia"/>
                        BIOGRAFIA
                    </span>
                    <article className="art">{biografia}</article>
                </div>
                <div className="item">
                    <span>
                        <img src="/assets/profission-icon.png" alt="icone profissão"/>
                        PROFISSÃO
                    </span>
                    <article className="art">{profissao}</article>
                </div>
                
            </div>
        );
    }
}

export default Infos