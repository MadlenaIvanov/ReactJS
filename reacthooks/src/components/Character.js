import AuthContext from "../contexts/authContext";
import { useContext } from "react";

const Character = ({
    name
}) => {
    const {addHobby} = useContext(AuthContext)
    return (
        <li onClick={ () => addHobby(name)}>{name}</li>
    )
}

export default Character;