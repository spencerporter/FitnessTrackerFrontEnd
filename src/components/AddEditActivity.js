import React, { useState, useEffect } from "react";
import axios from "axios"
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";
import { getActivityWithIDForEdit } from "../api"

export const api = axios.create({
    baseURL: `${BASE_URL}`,
})

async function addActivity(token, activity, history){
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
}

async function editActivity(token, activity, activityId, history){
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
    history.push(`/activities/activity/${activityId}`)
}

const AddEditActivity = ({token, isAdd, match}) => {  //what is isAdd?
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])

    useEffect(() => {
        if(match.params.activityId){
            getActivityWithIDForEdit(token, match.params.ActivityId, setName, setDescription);
        }       
    },[token,match.params.routineId])

    if(user.username){
        return (
            <div id="addActivity" className="centered m-3">
                <h1> {(isAdd ? "Add" : "Edit")} Routine</h1>
                <form className="w-50" 
                onSubmit={(event) => {
                    event.preventDefault();
                    const routine = {
                        name: name,
                        description: description
                       
                    }
                    if(isAdd){
                        addActivity(token, activity, history);
                    }else{
                        editActivity(token, activity, match.params.activityId, history);
                    }
                    
                }}> 
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Name" value={name}
                        onChange={({target: {value}}) => setName(value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="goalInput" className="form-label">Description</label>
                        <input type="text" className="form-control" id="goalInput" placeholder="Description" value={goal}
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