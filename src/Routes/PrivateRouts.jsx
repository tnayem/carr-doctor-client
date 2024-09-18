import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouts = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p>Loading.....</p>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRouts;