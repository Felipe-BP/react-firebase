import React, { Component } from 'react'
import './work.css'

class Work extends Component {
    state = {
        about: ['Sistema para simplificar o gerenciamento de jogos do usuário, com funcionalidades de jogos favoritos, avaliação, recomendação e descrições gerais.', 'Aplicação Java para meu próprio editor de texto', 'Website criado com apenas HTML5 e CSS3 à partir de um site já pronto!']
    }

    render(){
        return (
            <div className="flex-container">
                <div className="flex-item" id="editor">
                    <div className="sob">
                        <p id="about">{this.state.about[0]}</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Felipe-BP/Editor-de-Texto" className="repositorio">Ir para repositório</a>
                    </div>
                </div>
                <div className="flex-item" id="its">
                    <div className="sob">
                        <p id="about">{this.state.about[1]}</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/itsONE/itsGAMES_Desk-Java" className="repositorio">Ir para repositório</a>
                    </div>
                </div>
                <div className="flex-item" id="casamento">
                    <div className="sob">
                        <p id="about">{this.state.about[2]}</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Felipe-BP/t01" className="repositorio">Ir para repositório</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work