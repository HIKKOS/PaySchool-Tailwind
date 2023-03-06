import { Navigate } from "react-router-dom";
import { UserLoggedContex } from "../../context/Session/user-logged";
const ProtectedRoute = ( {user, children} ) => {
    if( !user ){
        return <Navigate to='/'/>
    }
    return children
}
export default ProtectedRoute