import React, { Component, Fragment } from 'react'
import './perfil-component.css'

class Perfil extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {nome} = this.props
        const {sobrenome} = this.props
        const {interesses} = this.props
        const {idiomas} = this.props
        const {formacao} = this.props
        const {atividades} = this.props
        const {path} = this.props
        return <Fragment>
            <div className="center">
                <div>
                    <div className="title">
                        <img id="avatar-perfil" src={path} alt="foto-perfil" className="foto" />
                    </div>
                    <p id="introducao">Olá, meu nome é <b>{nome} {sobrenome}</b> e este é o meu Portifólio!</p>
                </div>
                <div className="lista">
                    <h3>Interesses</h3>
                    <ul>
                        {interesses.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Idiomas</h3>
                    <ul>
                        {idiomas.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Formação</h3>
                    <ul>
                        {formacao.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Atividades Desenvolvidas</h3>
                    <ul>
                        {atividades.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                </div>
            </div>
        </Fragment>
    }
}


export default Perfil