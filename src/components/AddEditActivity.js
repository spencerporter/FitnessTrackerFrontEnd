import React, { useState, useEffect } from "react";
import axios from "axios"
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";
import { getActivityWithIDForEdit, getUser } from "../api"

export const api = axios.create({
    baseURL: `${BASE_URL}`,
})

async function addActivity(token, activity, history, setErrorDialog){
    try{
        const options = {
            method: "post",
            url: `${BASE_URL}/activities`,
            data: {
                name: activity.name,
                description: activity.description
                
            },
            };
            if(token) {
            options.headers = {'Authorization': `Bearer ${token}`};
        }
        await api(options);
        history.push(`/activities/`)
    } catch {
        setErrorDialog("An Activity with that Name Already Exists")
    }
}

async function editActivity(token, activity, activityId, history, setErrorDialog){
    try{
        const options = {
            method: "patch",
            url: `${BASE_URL}/activities/${activityId}`,
            data: {
                name: activity.name,
                description: activity.description
            },
            };
            if(token) {
            options.headers = {'Authorization': `Bearer ${token}`};
        }
        await api(options);
        history.push(`/activities/`)
    } catch {
        setErrorDialog("Could not update your Activity")
    }   
}

const AddEditActivity = ({token, isAdd, match, activity}) => {  //what is isAdd?
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    const [errorDialog, setErrorDialog] = useState("");
    
    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])

    useEffect(() => {
        if(match.params.activityId){
            getActivityWithIDForEdit(token, match.params.activityId, setName, setDescription);
        }       
    },[token,match.params.activityId])

    if(user.username){
        return (
            <div id="addActivity" className="centered m-3">
                <h1> {(isAdd ? "Add" : "Edit")} Activity</h1>
                <form className="w-50" 
                onSubmit={(event) => {
                    event.preventDefault();
                    const activity = {
                        name: name,
                        description: description
                       
                    }
                    if(isAdd){
                        addActivity(token, activity, history, setErrorDialog);
                    }else{
                        editActivity(token, activity, match.params.activityId, history, setErrorDialog);
                    }
                    
                }}> 
                    <div className="mb-3 errorMessage">
                        {errorDialog}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Name" value={name}
                        onChange={({target: {value}}) => setName(value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="goalInput" className="form-label">Description</label>
                        <input type="text" className="form-control" id="goalInput" placeholder="Description" value={description}
                        onChange={({target: {value}}) => setDescription(value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">{(isAdd ? "Submit" : "Save")}</button>
                </form>
            </div>)
    }else{
        return (
            <div className="centered m-3">
                <h1>Please Login</h1>
                <button type="button" className="btn btn-outline-primary" onClick={(event) =>{
                    event.preventDefault();
                    history.push("/login");
                }}>Log In</button>
            </div>);
    }
}

export default AddEditActivity;