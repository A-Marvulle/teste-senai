import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("sobre","routes/sobre.tsx"),
    route("quiz","routes/quiz.tsx"),
    route("contato","routes/contato.tsx"),
    route("404","routes/404.tsx"),
] satisfies RouteConfig;
