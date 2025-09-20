import { NavLink } from "react-router";
import menuItens from "../../assets/menu.json"

function Menu() {
    return (
        <nav>
            {menuItens.map((item, index) => (
                <NavLink key={index} to={`/${item.url}`}>
                    {item.nome}
                </NavLink>
            ))}
        </nav>
    )
}

export default Menu;
