import {
  isRouteErrorResponse,
  Links,
  NavLink,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

// ! ROTAS
import type { Route } from "./+types/root";
import { useLocation } from 'react-router'

// ? ESTILO
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

// ? COMPONENTES
import Topo from "app/components/topo/topo";
import Footer from "app/components/footer/footer"
import Breadcrumb from 'app/components/bread/bread';
import Title from 'app/components/title/title';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        <Meta />
        <Links />
        <Title />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  let location = useLocation();
  return (
    <>
      <Topo />
      <main>
        {location.pathname != '/' && <Breadcrumb />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "Página Não Encontrada";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "Página Não Encontrada"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
      <Topo />
      <main>
        <Breadcrumb titleOverride={message} />
        <div className="container">
          <h2>{message}</h2>
          <p>{details}</p>
          <p>
            <NavLink className='btn btn-light' to='/' title='Home'>
              Voltar ao ínicio
            </NavLink>
          </p>
          <p>
            <NavLink className='btn btn-light' to='/mapa-site' title='Mapa do Site'>
              navegar
            </NavLink>
          </p>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
