import React from 'react'
import fire from '../config/fire'

class Form extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            user : {},
            nome : '',
            sobrenome : '',
            interesses : [],
            idiomas : [],
            formacao : [],
            atividades : [],
            skills : [],
            biografia : '',
            profissao : '',
            github : '',
            facebook : '',
            instagram : '',
            linkedin : ''
        }
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

    render(){
        return (
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', minHeight : '45rem', marginTop: '80px'}}>
                <div className="flex-itemm">
                <div className="row">
                    <div class="col">
                        <input value={this.state.nome} type="text" class="form-control" placeholder="Primeiro Nome" />
                    </div>
                    <div class="col mb-1">
                        <input value={this.state.sobrenome} type="text" class="form-control" placeholder="Último Nome" />
                    </div>
                </div>
                <input class="form-control" placeholder="Email" type="email" />
                <input className="form-control mt-1" type="text" name="your-subject" size="32" placeholder="Assunto" />
                <textarea className="form-control mt-1" name="your-message" cols="33" rows="10" placeholder="Biografia"></textarea>
                <textarea className="form-control mt-1" name="your-message" cols="33" rows="10" placeholder="Profissão"></textarea>
                <button type="submit" className="mt-1 btn btn-purple btn-lg full-width">Atualizar Dados</button>
            </div>
            </div>
        );
    }
}

export default Form