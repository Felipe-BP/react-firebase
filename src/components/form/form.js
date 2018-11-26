import React from 'react'
import fire from '../config/fire'

class Form extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            user : {},
            pathPhoto: '',
            nome : '',
            sobrenome : '',
            text_interesses : '',
            interesses : [],
            text_idiomas : '',
            idiomas : [],
            text_formacao : '',
            formacao : [],
            text_atividades : '',
            atividades : [],
            text_skills : '',
            skills : [],
            trabalho1 : '',
            link1: '',
            trabalho2 : '',
            link2: '',
            trabalho3 : '',
            link3: '',
            biografia : '',
            profissao : '',
            linkGitH : '',
            linkInsta : '',
            linkFace : '',
            linkLinke : ''
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addInteresses = this.addInteresses.bind(this);
        this.addIdiomas = this.addIdiomas.bind(this);
        this.addFormacao = this.addFormacao.bind(this);
        this.addSkills = this.addSkills.bind(this);
        this.addAtividades = this.addAtividades.bind(this);
        this.fileSelect = this.fileSelect.bind(this);
    }

    componentWillMount(){
        this.authListener();
    }
    
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({ user });
            this.lerDados();
          } else {
            this.setState({ user : null });
            window.location.href = "/";
          }
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    addInteresses = () => {
        if(this.state.text_interesses.length){
            this.setState({
                text_interesses : "",
                interesses : [...this.state.interesses, this.state.text_interesses] 
            });
        }
    }

    addIdiomas = (e) => {
        if(this.state.text_idiomas.length){
            this.setState({
                text_idiomas : "",
                idiomas : [...this.state.idiomas, this.state.text_idiomas] 
            });
        }
    }

    addFormacao = (e) => {
        if(this.state.text_formacao.length){
            this.setState({
                text_formacao : "",
                formacao : [...this.state.formacao, this.state.text_formacao] 
            });
        }
    }

    addSkills = (e) => {
        if(this.state.text_skills.length){
            this.setState({
                text_skills : "",
                skills : [...this.state.skills, this.state.text_skills] 
            });
        }
    }

    addAtividades = (e) => {
        if(this.state.text_atividades.length){
            this.setState({
                text_atividades : "",
                atividades : [...this.state.atividades, this.state.text_atividades] 
            });
        }
    }

    submit(){
        const data = {
            pathPhoto : this.state.pathPhoto,
            name: this.state.nome,
            lastName: this.state.sobrenome,
            interesses: this.state.interesses,
            idiomas: this.state.idiomas,
            formacao: this.state.formacao,
            atividades: this.state.atividades,
            skills: this.state.skills,
            trabalho1: this.state.trabalho1,
            link1: this.state.link1,
            trabalho2: this.state.trabalho2,
            link2: this.state.link2,
            trabalho3: this.state.trabalho3,
            link3: this.state.link3,
            biografia: this.state.biografia,
            profissao: this.state.profissao,
            linkGitH : this.state.linkGitH,
            linkInsta : this.state.linkInsta,
            linkFace : this.state.linkFace,
            linkLinke : this.state.linkLinke
        }
        fire.database().ref(`users${this.props.match.params.id}`).child('user').set(data);
    }

    fileSelect = event =>{
        this.setState({
            pathPhoto : "/assets/" + event.target.files[0].name
        })
    }

    render(){
        return (
            <form>
                <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', minHeight : '45rem', marginTop: '80px'}}>
                    <div className="flex-itemm">
                    <div className="row">
                        <div className="col">
                            <input id="nome" onChange={this.handleChange} type="text" className="form-control" placeholder="Primeiro Nome" required />
                        </div>
                        <div className="col">
                            <input id="sobrenome" onChange={this.handleChange} type="text" className="form-control" placeholder="Último Nome" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_interesses" value={this.state.text_interesses} className="form-control mt-2" onChange={this.handleChange} placeholder="Interesses" type="text" required />
                        </div>
                        <div className="col">
                            <a href className="btn btn-success mt-2" onClick={this.addInteresses}>Enviar</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_idiomas" value={this.state.text_idiomas} className="form-control mt-2" onChange={this.handleChange} placeholder="Idiomas" type="text" required />
                        </div>
                        <div className="col">
                            <a href className="btn btn-success mt-2" onClick={this.addIdiomas}>Enviar</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_formacao" value={this.state.text_formacao} className="form-control mt-2" onChange={this.handleChange} placeholder="Formação" type="text" required />
                        </div>
                        <div className="col">
                            <a href className="btn btn-success mt-2" onClick={this.addFormacao}>Enviar</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_skills" value={this.state.text_skills} className="form-control mt-2" onChange={this.handleChange} placeholder="Habilidades" type="text" required />
                        </div>
                        <div className="col">
                            <a href className="btn btn-success mt-2" onClick={this.addSkills}>Enviar</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_atividades" value={this.state.text_atividades} className="form-control mt-2" onChange={this.handleChange} placeholder="Atividades Desenvolvidas" type="text" required />
                        </div>
                        <div className="col">
                            <a href className="btn btn-success mt-2" onClick={this.addAtividades}>Enviar</a>
                        </div>
                    </div>
                    <textarea id="trabalho1" className="form-control mt-2" cols="33" rows="5" onChange={this.handleChange} placeholder="Trabalho 1 Descrição" type="text" required ></textarea>
                    <input id="link1" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira Link do Repositório Trab1" required />
                    <textarea id="trabalho2" className="form-control mt-2" cols="33" rows="5" onChange={this.handleChange} placeholder="Trabalho 2 Descrição" type="text" required ></textarea>
                    <input id="link2" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira Link do Repositório Trab1" required />
                    <textarea id="trabalho3" className="form-control mt-2" cols="33" rows="5" onChange={this.handleChange} placeholder="Trabalho 3 Descrição" type="text" required ></textarea>
                    <input id="link3" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira Link do Repositório Trab1" required />
                    <textarea id="biografia" className="form-control mt-2" cols="33" rows="10" onChange={this.handleChange} placeholder="Biografia" required ></textarea>
                    <textarea id="profissao" className="form-control mt-2" cols="33" rows="10" onChange={this.handleChange} placeholder="Profissão" required ></textarea>
                    <input id="linkGitH" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira o Link do GitHub" required />
                    <input id="linkInsta" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira o Link do Instagram" required />
                    <input id="linkFace" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira o Link do Facebook" required />
                    <input id="linkLinke" onChange={this.handleChange} type="text" className="form-control mt-2" placeholder="Insira o Link do Linkedin" required />
                    <input type="file" onChange={this.fileSelect} className="form-control mt-2" />
                    <button type="submit" onClick={this.submit} className="mt-1 mb-2 btn btn-purple btn-lg full-width">Atualizar Dados</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form