import React from 'react'
import './blog.css'
import Button from '../button/Button'

const Blog = () => {
    return (
    <div className="center">
        <div className="flex">
            <img src="/assets/games-de-linux.jpg" alt="imagem games linux" id="img"/>
            <p id="sinopse">O ano de 2018 tem sido muito interessante em termos dos jogos disponíveis para as distribuições Linux, já que a oferta de títulos de diferentes gêneros aumentou exponencialmente...</p>
            <Button value="Ver Mais" content="https://www.diolinux.com.br/2018/11/os-generos-e-videogames-mais-jogados-no-linux.html" color="true"/>
        </div>
        <div className="flex">
            <img src="/assets/linux-mint.jpg" alt="logo linux mint" id="img"/>
            <p id="sinopse">No blog oficial do Linux Mint, Clement Lefebvre (idealizador do projeto), anunciou algumas mudanças no visual do Cinnamon e também agradeceu aos apoiadores do projeto...</p>
            <Button value="Ver Mais" content="https://www.diolinux.com.br/2018/10/confiram-as-novidades-do-linux-mint-191.html" color="true"/>
        </div>
        <div className="flex">
            <img src="/assets/ibm-red-heat.jpg" alt="imagem ilustrativa logo red heat" id="img"/>
            <p id="sinopse">Nesse fim de semana a comunidade open source e de tecnologia foram surpreendidas com a notícia bombásticas, com a venda da Red Hat para a IBM pela bagatela de US$34 BI. Só a efeito de comparação, o GitHub foi vendido por US$7,5 BI...</p>
            <Button value="Ver Mais" content="https://www.diolinux.com.br/2018/10/ibm-compra-red-hat-por-us34-bi-maior-da-historia.html" color="true"/>
        </div>
    </div>
    )
}

export default Blog