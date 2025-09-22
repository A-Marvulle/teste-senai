import { useEffect } from "react";
import menuItens from "../../assets/menu.json";
import { useLocation } from 'react-router';

export default function Title() {
    const location = useLocation();
    const path = location.pathname.replace(/^\/+/, "");

    const currentItem = menuItens.find(item => item.url === path);
    const pageTitle = currentItem ? currentItem.nome : "Página não encontrada";

    useEffect(() => {
        document.title = pageTitle + ' - Teste Alfredo';
    }, [pageTitle]);

    return null; 
}
