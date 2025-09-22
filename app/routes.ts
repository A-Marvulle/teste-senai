import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("sobre","routes/sobre.tsx"),
    route("quiz","routes/quiz.tsx"),
    route("contato","routes/contato.tsx"),
    route("mapa-site","routes/mapa-site.tsx"),
] satisfies RouteConfig;
