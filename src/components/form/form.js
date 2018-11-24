import React from 'react'
import fire from '../config/fire'

class Form extends React.Component{
    
    constructor(props){
        
        super(props);
        this.state = {
            user : {},
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
            biografia : '',
            profissao : '',
            github : '',
            facebook : '',
            instagram : '',
            linkedin : ''
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addInteresses = this.addInteresses.bind(this);
        this.addIdiomas = this.addIdiomas.bind(this);
        this.addFormacao = this.addFormacao.bind(this);
        this.addSkills = this.addSkills.bind(this);
        this.addAtividades = this.addAtividades.bind(this);
    }

    componentWillMount(){
        this.authListener();
    }
    
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({ user });
            console.log(this.state);
          } else {
            this.setState({ user : null });
            console.log(this.state);
            window.location.href = "/";
          }
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    addInteresses = (e) => {
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

    }

    render(){
        return (
            <form>
                <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', minHeight : '45rem', marginTop: '80px'}}>
                    <div className="flex-itemm">
                    <div className="row">
                        <div className="col">
                            <input value={this.state.nome} type="text" class="form-control" placeholder="Primeiro Nome" required />
                        </div>
                        <div className="col">
                            <input value={this.state.sobrenome} type="text" class="form-control" placeholder="Último Nome" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_interesses" class="form-control mt-2" value={this.state.interesses} onChange={this.handleChange} placeholder="Interesses" type="text" />
                        </div>
                        <div className="col">
                            <button className="btn btn-success mt-2" onClick={this.addInteresses}>V</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_idiomas" class="form-control mt-2" value={this.state.idiomas} onChange={this.handleChange} placeholder="Idiomas" type="text" />
                        </div>
                        <div className="col">
                            <button className="btn btn-success mt-2" onClick={this.addIdiomas}>V</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_formacao" class="form-control mt-2" value={this.state.formacao} onChange={this.handleChange} placeholder="Formação" type="text" />
                        </div>
                        <div className="col">
                            <button className="btn btn-success mt-2" onClick={this.addFormacao}>V</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_skills" class="form-control mt-2" value={this.state.skills} onChange={this.handleChange} placeholder="Habilidades" type="text" />
                        </div>
                        <div className="col">
                            <button className="btn btn-success mt-2" onClick={this.addSkills}>V</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="text_atividades" class="form-control mt-2" value={this.state.atividades} onChange={this.handleChange} placeholder="Atividades Desenvolvidas" type="text" />
                        </div>
                        <div className="col">
                            <button className="btn btn-success mt-2" onClick={this.addAtividades}>V</button>
                        </div>
                    </div>
                    <textarea className="form-control mt-2" name="your-message" cols="33" rows="10" placeholder="Biografia"></textarea>
                    <textarea className="form-control mt-2" name="your-message" cols="33" rows="10" placeholder="Profissão"></textarea>
                    <button type="submit" onClick={this.submit} className="mt-1 mb-2 btn btn-purple btn-lg full-width">Atualizar Dados</button>
                </div>
                </div>
            </form>
        );
    }
}

export default Form