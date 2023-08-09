import { AuthContext } from "../Context/authContext";
import RotasPrivadas from "./rotasPrivadas";
import RotasPublicas from "./rotasPublicas";
import React, {useContext} from 'react'
function RotasNavigation() {
    const {token} = useContext(AuthContext);
    return(
       token ? <RotasPrivadas /> : <RotasPublicas />
    )
}

export default RotasNavigation;