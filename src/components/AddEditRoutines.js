import React, { useState, useEffect } from "react";
import axios from "axios"
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";
import { getRoutineWithIDForEdit , getUser } from "../api"

export const api = axios.create({
    baseURL: `${BASE_URL}`,
})

async function addRoutine(token, routine, history){
    const options = {
        method: "post",
        url: `${BASE_URL}/routines`,
        data: {
            name: routine.name,
            goal: routine.goal,
            isPublic: routine.isPublic
        },
        };
        if(token) {
        options.headers = {'Authorization': `Bearer ${token}`};
    }
    await api(options);
    history.push(`/routines/`)
}

async function editRoutine(token, routine, routineId, history){
    const options = {
        method: "patch",
        url: `${BASE_URL}/routines/${routineId}`,
        data: {
            name: routine.name,
            goal: routine.goal,
            isPublic: routine.isPublic
        },
        };
        if(token) {
        options.headers = {'Authorization': `Bearer ${token}`};
    }
    await api(options);
    history.push(`/routines/routine/${routineId}`)
}

const AddEditRoutine = ({token, isAdd, match}) => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])

    useEffect(() => {
        if(match.params.routineId){
            getRoutineWithIDForEdit(token, match.params.routineId, setName, setGoal, setIsPublic);
        }       
    },[token,match.params.routineId])

    if(user.username){
        return (
            <div id="addRoutine" className="centered m-3">
                <h1> {(isAdd ? "Add" : "Edit")} Routine</h1>
                <form className="w-50" 
                onSubmit={(event) => {
                    event.preventDefault();
                    const routine = {
                        name: name,
                        goal: goal,
                        isPublic: isPublic
                    }
                    if(isAdd){
                        addRoutine(token, routine, history);
                    }else{
                        editRoutine(token, routine, match.params.routineId, history);
                    }
                    
                }}> 
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Title</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Name" value={name}
                        onChange={({target: {value}}) => setName(value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="goalInput" className="form-label">Description</label>
                        <input type="text" className="form-control" id="goalInput" placeholder="Goal" value={goal}
                        onChange={({target: {value}}) => setGoal(value)} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="publicCheckbox" value={isPublic}
                        onChange={({target: {value}}) => setIsPublic(!isPublic)} />
                        <label className="form-check-label" htmlFor="publicCheckbox">
                            isPublic
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">{(isAdd ? "Submit" : "Save")}</button>
                </form>
            </div>)
    }else{
        return (
            <div className="centered m-3">
                <h1>Please Login to see your Routines</h1>
                <button type="button" className="btn btn-outline-primary" onClick={(event) =>{
                    event.preventDefault();
                    history.push("/login");
                }}>Log In</button>
            </div>);
    }
}

export default AddEditRoutine;