import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router';



export default function Bread() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const nomePagina = pathnames.length ? pathnames[pathnames.length - 1] : 'Home';
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography sx={{ color: 'text.primary' }}>{nomePagina}</Typography>
      </Breadcrumbs>
    </div>
  );
}
