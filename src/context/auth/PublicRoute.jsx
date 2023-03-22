import {Navigate, Outlet} from 'react-router-dom';
import { PRIVATE } from '../../config/router/paths';
import {useAuthContext} from './auth-context';

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={`${PRIVATE}/Servicios`} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}