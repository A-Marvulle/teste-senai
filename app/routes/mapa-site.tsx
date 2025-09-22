import Menu from 'app/components/menu/menu';
import { NavLink } from "react-router";
export default function MapaSite() {
    return (
        <>
            <section className="container">
                <h2 className="fs-2 text-center">Nague pelas páginas</h2>
                <nav className='menu-mapa'>
                    <Menu />
                    <NavLink className='nav-link' to='/mapa-site' title='Mapa Site'>
                        Mapa Site
                    </NavLink>
                </nav>
            </section>
        </>
    );
}