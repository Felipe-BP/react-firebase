import React, { Component } from 'react'
import './work.css'

class Work extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {trabalho1} = this.props
        const {link1} = this.props
        const {trabalho2} = this.props
        const {link2} = this.props
        const {trabalho3} = this.props
        const {link3} = this.props
        return (
            <div className="flex-container">
                <div className="flex-item" id="div-img">
                    <div className="sob">
                        <p id="about">{trabalho1}</p>
                        <a target="_blank" rel="noopener noreferrer" href={link1} className="repositorio">Ir para repositório</a>
                    </div>
                </div>
                <div className="flex-item" id="div-img">
                    <div className="sob">
                        <p id="about">{trabalho2}</p>
                        <a target="_blank" rel="noopener noreferrer" href={link2} className="repositorio">Ir para repositório</a>
                    </div>
                </div>
                <div className="flex-item" id="div-img">
                    <div className="sob">
                        <p id="about">{trabalho3}</p>
                        <a target="_blank" rel="noopener noreferrer" href={link3} className="repositorio">Ir para repositório</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work