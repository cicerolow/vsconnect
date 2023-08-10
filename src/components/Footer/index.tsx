//imagens
import imgLogo from "../../assets/imagens/logo.svg";
import imgDev from "../../assets/imagens/dev.png";
import imgFacebook from "../../assets/imagens/facebook.svg";
import imgInstagram from "../../assets/imagens/instagram.svg";
import imgLinkedin from "../../assets/imagens/linkedin.svg";

//estilizacao
import "./style.css";

function Footer() {
    return (
        //codigo do footer
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={imgDev} alt="" />
                    <div className="span_dicas_texto">
                        <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                            recomendações para saber mais.</p>
                        <a className="botao botao_dicas" href="#">mais dicas</a>
                    </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>Login</li>
                            <li>Home</li>
                            <li>Listar Serviços</li>
                            <li>Cadastrar Cliente</li>
                            <li>Cadastrar Desenvolvedor</li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <a href="#"><img src={imgFacebook} alt="" /></a>
                            <a href="#"><img src={imgInstagram} alt="" /></a>
                            <a href="#"><img src={imgLinkedin} alt="" /></a>
                        </div>
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>       
    );

}

export default Footer;