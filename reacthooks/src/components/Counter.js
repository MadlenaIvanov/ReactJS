import AuthContext from "../contexts/authContext";
import { useEffect, useContext } from "react";

const Counter = () => {
    const { count } = useContext(AuthContext)

    useEffect(() => {
        // console.log(value)        
        return () => {  
            console.log('unmounted')
        }
    }, []);

    return (
        <h3>{count}</h3> 
    )
}
export default Counter;