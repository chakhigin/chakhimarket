import { useContext, useEffect, useState } from "react";
import { Auth } from "./auth-user";
import { UserContext } from "../context/userContext";

function UserLoggedIn(){
    const {isUser,setIsUser,user,setUser} = useContext<any>(UserContext);

    const userLogged = async () => {
        const user: any = await Auth();
        if(user){
            setUser(user);
            setIsUser(true);
        }
    }

    useEffect(() => {
        userLogged();
    },[])

    return {user,isUser}

}

export default UserLoggedIn;