import React, { Component } from 'react';
import './dashboard.css'
import Title from '../title/title'
import Perfil from '../perfil/perfil-component'
import Button from '../button/Button'
import Habilidades from '../skills/habilidades';
import Blog from '../blog/blog'
import Work from '../works/work'
import Infos from '../infos/infos'
import Form from '../form/form'
import Footer from '../footer/footer'
import fire from '../config/fire'


class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount(){
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

  render() {
    return (<div>
              <section className="perfil" id="perfil">
                <div className="title">
                  <Title value="Perfil" color="false" />
                </div>
                <Perfil />
                <div className="title">
                  <Button value="Download Currículo" content="./assets/Currículo.pdf" color="false"/>
                </div>
              </section>
              <section id="habilidades">
                  <div>
                    <Title value="Skills" color="true" />
                  </div>
                  <div>
                    <h3 className="p">Estas são algumas de minhas habilidades!</h3>
                    <Habilidades />
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
                  <Work />
                </div>
              </section>
              <section id="infos">
                <div className="title">
                  <Title value="Mais Informações" color="false" />
                </div>
                <h3>Mais algumas informações sobre mim</h3>
                <Infos />
                <div>
                  <a target="_blank" href="https://github.com/Felipe-BP">
                    <img src="./assets/github-icon.png" alt="icone repositório github"/>
                  </a>
                  <p>Link para o meu perfil do GitHub</p>
                </div>
              </section>
              <section id="contato">
                <div className="title">
                  <Title value="Contato" color="true" />
                </div>
                <Form />
                <div className="title">
                  <h5 className="p">Link para as minhas redes sociais!</h5>
                  <ul id="redes-sociais">
                    <li>
                      <a target="_blank" href="https://www.facebook.com/felipe.bueno.56679"><img src="./assets/facebook-icon.png" alt="icone facebook"/></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/felipe.bueno01/?hl=pt-br"><img src="./assets/instagram-icon.png" alt="icone instagram"/></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/felipe-bueno-de-paula-85898815b/"><img src="./assets/linkedin-icon.png" alt="icone linkedin"/></a>
                    </li>
                  </ul>
                </div>
              </section>
              <Footer name="Felipe Bueno" email="gvv.fel@gmail.com" number="+55 (43) 996209896" />
            </div>
            );
  }
}

export default Dashboard;