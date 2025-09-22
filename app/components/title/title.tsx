import { useEffect } from "react";
import menuItens from "../../assets/menu.json";
import { useLocation } from 'react-router';

export default function Title() {
    const location = useLocation();
    const path = location.pathname.replace(/^\/+/, "");

    let pageTitle;

    if (path === "mapa-site") {
        pageTitle = "Mapa Site";
    } else {
        const currentItem = menuItens.find(item => item.url === path);
        pageTitle = currentItem?.nome || "Página não encontrada";
    }


    useEffect(() => {
        document.title = `${pageTitle} - Teste Alfredo`;
    }, [pageTitle]);

    return null;
}
