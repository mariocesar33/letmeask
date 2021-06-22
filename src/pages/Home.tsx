import illustrationImg from '../assets/images/illustration.svg';
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from '../components/Button';

import "../styles/auth.scss";

export function Home() {
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração pergunta e resposta"/>
        <strong>Cria salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask logotipo" />
          <button className="create-room">
            <img src={googleIconImg} alt="logo do google" />
            Craia sua sala com o google
          </button>
          <div className="separator">ou entre numa sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala" 
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}