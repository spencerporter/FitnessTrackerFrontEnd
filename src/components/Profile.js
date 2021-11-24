import React, {useState, useEffect} from "react";

import { getUser } from "../api";

const Profile = ({token, history}) => {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])

    if(user.username){
        return (
            <div className="centered">
                <h1> Welcome: {user.username} </h1> 
                
            </div>
        )
    }else{
        return (
            <div className="centered m-3">
                <h1>Please Login to see your Profile</h1>
                <button type="button" className="btn btn-outline-primary" onClick={(event) =>{
                    event.preventDefault();
                    history.push("/login");
                }}>Log In</button>
            </div>);
    }
}

export default Profile;