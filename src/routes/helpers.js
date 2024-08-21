import { Navigate} from 'react-router-dom';

export function AuthRouteHelper({children, isAuthenticated, ...rest}) {
    return isAuthenticated ? children:<Navigate to='/login' />
}

export function ProtectedRouteHelper({children, isAuthenticated, ...rest}) {
   return !isAuthenticated ? children:<Navigate to='/dashboard' />
}