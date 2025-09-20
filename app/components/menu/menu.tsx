import { NavLink } from "react-router";
import menuItens from "../../assets/menu.json"

function Menu() {
    return (
        <>
            {menuItens.map((item, index) => (
                <NavLink className='nav-link' key={index} to={`/${item.url}`} title={item.nome}>
                    {item.nome}
                </NavLink>
            ))}
        </>
    )
}

export default Menu;
