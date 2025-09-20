import Menu from "app/components/menu/menu";
function Footer() {
  return (
    <footer>
       <Menu />

       <h3>Fontes:</h3>
       <ul>
        <li className="fonte"><a href="https://pt.wikipedia.org/wiki/Spotify" target="_blank" rel="noopener noreferrer" title="Wikipédia">Wikipédia</a></li>
        <li className="fonte"><a href="https://canaltech.com.br/apps/curiosidades-sobre-spotify-que-voce-provavelmente-nao-sabia-205776/" target="_blank" rel="noopener noreferrer" title="CanalTech">Canal Tech</a></li>
        <li className="fonte"><a href="https://www.citador.pt/frases/citacoes/t/musica" target="_blank" rel="noopener noreferrer" title="Citador">Citador</a></li>
       </ul>
    </footer>
  )
}

export default Footer;
