import React, { Component } from 'react';
import './dashboard.css'
import Title from '../title/title'
import Perfil from '../perfil/perfil-component'
import Button from '../button/Button'
import Habilidades from '../skills/habilidades';
import Blog from '../blog/blog'
import Work from '../works/work'
import Infos from '../infos/infos'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import fire from '../config/fire'


class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
      pathPhoto : '',
      curriculo : '',
      nome : '',
      sobrenome : '',
      interesses : [],
      idiomas : [],
      formacao : [],
      atividades : [],
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
    this.lerDados = this.lerDados.bind(this);
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
    this.lerDados();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ user });;
      } else {
        this.setState({ user : null });
        window.location.href = "/";
      }
    });
  }

  lerDados(){
    fire.database().ref(`users${this.props.match.params.id}`).child('user').once('value').then(snap => {
      this.setState({
        pathPhoto : snap.val().pathPhoto,
        curriculo : snap.val().curriculo,
        nome: snap.val().name,
        sobrenome: snap.val().lastName,        
        interesses : snap.val().interesses,
        idiomas: snap.val().idiomas,
        formacao: snap.val().formacao,
        atividades: snap.val().atividades,
        skills: snap.val().skills,
        trabalho1: snap.val().trabalho1,
        link1 : snap.val().link1,
        trabalho2: snap.val().trabalho2,
        link2 : snap.val().link2,
        trabalho3: snap.val().trabalho3,
        link3 : snap.val().link3,
        biografia: snap.val().biografia,
        profissao: snap.val().profissao,
        linkGitH: snap.val().linkGitH,
        linkInsta: snap.val().linkInsta,
        linkFace: snap.val().linkFace,
        linkLinke: snap.val().linkLinke
      })
    })
  }

  render() {
    return (<div>
              <section className="perfil" id="perfil">
                <div className="title">
                  <Title value="Perfil" color="false" />
                </div>
                <Perfil path={this.state.pathPhoto} nome={this.state.nome} sobrenome={this.state.sobrenome} interesses={this.state.interesses} idiomas={this.state.idiomas} formacao={this.state.formacao} atividades={this.state.atividades} />
                <div className="title">
                  <Button value="Download Currículo" content={this.state.curriculo} color="false"/>
                </div>
              </section>
              <section id="habilidades">
                  <div>
                    <Title value="Skills" color="true" />
                  </div>
                  <div>
                    <h3 className="p">Estas são algumas de minhas habilidades!</h3>
                    <Habilidades skills={this.state.skills}/>
                  </div>
              </section>
              <section id="blog">
                <div className="title">
                  <Title value="Blog" color="false" />
                </div>
                <Blog />
              </section>
              <section id="trabalhos">
                <div className="title">
                  <Title value="Trabalhos" color="true" />
                </div>
                <h3 className="p">Estes são alguns de meus trabalhos</h3>
                <div className="title">
                  <Work trabalho1={this.state.trabalho1} link1={this.state.link1} trabalho2={this.state.trabalho2} link2={this.state.link2} trabalho3={this.state.trabalho3} link3={this.state.link3}/>
                </div>
              </section>
              <section id="infos">
                <div className="title">
                  <Title value="Mais Informações" color="false" />
                </div>
                <h3>Mais algumas informações sobre mim</h3>
                <Infos biografia={this.state.biografia} profissao={this.state.profissao}/>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href={this.state.linkGitH}>
                    <img src="/assets/github-icon.png" alt="icone repositório github"/>
                  </a>
                  <p>Link para o meu perfil do GitHub</p>
                </div>
              </section>
              <section id="contato">
                <div className="title">
                  <Title value="Contato" color="true" />
                </div>
                <Contact />
                <div className="title">
                  <h5 className="p">Link para as minhas redes sociais!</h5>
                  <ul id="redes-sociais">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href={this.state.linkFace}><img src="/assets/facebook-icon.png" alt="icone facebook"/></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href={this.state.linkInsta}><img src="/assets/instagram-icon.png" alt="icone instagram"/></a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href={this.state.linkLinke}><img src="/assets/linkedin-icon.png" alt="icone linkedin"/></a>
                    </li>
                  </ul>
                </div>
              </section>
              <Footer name="Felipe Bueno Web Developer" email="gvv.fel@gmail.com" number="+55 (43) 996209896" />
            </div>
            );
  }
}

export default Dashboard;