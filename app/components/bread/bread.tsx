import { NavLink } from "react-router";
import { useLocation } from 'react-router';
import './bread.css';
import breadBg from '../../assets/banner.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Bread() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const nomePagina = pathnames.length ? pathnames[pathnames.length - 1] : 'Home';
  return (
    <section  className='bread__default'
    style={{ backgroundImage: `linear-gradient(90deg,rgba(26, 26, 26, 0.8) 50%, rgba(26, 26, 26, 0.8) 100%), url(${breadBg})` }}>
      <nav aria-label="breadcrumb">
        <ol className="bread">
          <li>
            <NavLink className='nav-link' to='/' title='Home'>
             <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronRight} />
            {nomePagina}
          </li>
        </ol>
      </nav>

      <h1 className="fs-1">{nomePagina}</h1>
    </section>
  );
}
