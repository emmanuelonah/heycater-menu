import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRoutePropTypes = {
  fallbackRoute?: string;
  checkIsPermitted(): boolean;
};

export function ProtectedRoute({ checkIsPermitted, fallbackRoute }: ProtectedRoutePropTypes) {
  if (!checkIsPermitted()) {
    return <Navigate to={fallbackRoute || '/login'} replace />;
  }

  return <Outlet />;
}
