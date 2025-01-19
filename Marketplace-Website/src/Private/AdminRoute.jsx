import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/UI/Loader';
import UserRole from '../Hook/UserRole';

const AdminRoute = ({children}) => {
    const [role,isLoading]= UserRole();
    const location = useLocation();
    
    if(isLoading){
       return <Loader></Loader>
    }
    
    if (role=="admin") {
      return children;
    } 
    return <Navigate state={location.pathname} to="/login"></Navigate>;
    
    
};

export default AdminRoute;