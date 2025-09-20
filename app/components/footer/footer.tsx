import Menu from "app/components/menu/menu";
import { NavLink } from "react-router";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-around align-items-center align-items-lg-start text-center text-lg-start">
          <div>
            <h3 className="fs-3 my-3">Menu</h3>
            <nav>
              <Menu />
              <NavLink className='nav-link' to='/mapa-site' title='Mapa Site'>
                Mapa Site
              </NavLink>
            </nav>
          </div>

          <div>
            <h3 className="fs- my-3">Fontes</h3>
            <ul className="list__fontes">
              <li className="fonte"><a href="https://pt.wikipedia.org/wiki/Spotify" target="_blank" rel="noopener noreferrer" title="Wikipédia">Wikipédia</a></li>
              <li className="fonte"><a href="https://canaltech.com.br/apps/curiosidades-sobre-spotify-que-voce-provavelmente-nao-sabia-205776/" target="_blank" rel="noopener noreferrer" title="CanalTech">Canal Tech</a></li>
              <li className="fonte"><a href="https://www.citador.pt/frases/citacoes/t/musica" target="_blank" rel="noopener noreferrer" title="Citador">Citador</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
