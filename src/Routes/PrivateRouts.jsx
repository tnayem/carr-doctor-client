import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRouts = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <p>Loading.....</p>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRouts;