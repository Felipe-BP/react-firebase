import React, { Component, Fragment } from 'react'
import './perfil-component.css'

class Perfil extends Component {

    constructor(props){
        super(props);
        this.state = {
            interesses: ['Aprofundar conhecimentos no Desenvolvimento para Web', 'Aprender sobre desenvolvimento mobile', 'Tecnologias como JavaScript, Python, ReactJS, Redux, NodeJS'],
            idiomas: ['Inglês Intermediário', 'Espanhol Intermediário'],
            formacao: ['Graduação Tecnologia em Análise e Desenvolvimento de Sistemas UTFPR-CP(2019)', 'Ensino Médio Colégio Estadual Olavo Bilac(2016)'],
            atividades: ['Estagiário na Prefeitura Municipal de Ibiporã, setor de Tecnologia da Informação']
        }
    }

    render(){
        return <Fragment>
            <div className="center">
                <div>
                    <div className="title">
                        <img src="./assets/felipe-bueno.png" alt="foto-perfil" className="foto" />
                    </div>
                    <p id="introducao">Olá, meu nome é <b>Felipe Bueno</b> e este é o meu Portifólio!</p>
                </div>
                <div className="lista">
                    <h3>Interesses</h3>
                    <ul>
                        {this.state.interesses.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Idiomas</h3>
                    <ul>
                        {this.state.idiomas.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Formação</h3>
                    <ul>
                        {this.state.formacao.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Atividades Desenvolvidas</h3>
                    <ul>
                        {this.state.atividades.map(
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