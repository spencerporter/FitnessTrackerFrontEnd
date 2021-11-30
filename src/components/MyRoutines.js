import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { deleteRoutineWithID, fetchRoutinesByUsername } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";
import { getUser } from "../api";

async function getUsersRoutines(user, setRoutines, setDisplayRoutines){ 
    const routines = await fetchRoutinesByUsername(user.username);
    console.log("Reloading Routines", routines);
    setRoutines(routines);
    setDisplayRoutines(routines);
}

async function deleteRoutine(routineId, token, setRoutines, setDisplayRoutines, setShowDeleteAlert, user){
    await deleteRoutineWithID(token, routineId)
    getUsersRoutines(user,setRoutines, setDisplayRoutines);
    setShowDeleteAlert(true);
}

function RoutineMatches(routine, text) {
    if(routine.name.toLowerCase().includes(text)) return true;
    if(routine.creatorName.toLowerCase().includes(text)) return true;
    if(routine.goal.toLowerCase().includes(text)) return true;

    return false;
}

const MyRoutines = ({token, history}) => {
    const [user, setUser] = useState({});
    const [routines, setRoutines] = useState([]);
    const [displayRoutines, setDisplayRoutines] = useState([]);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    
    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])

    useEffect(() => {
        if(user.username){
            getUsersRoutines(user, setRoutines, setDisplayRoutines);
        }
    }, [user]);

    if(user.username){
        return (
            <div id="routines" className="centered w-75">
                <h1> Welcome: {user.username} </h1> 
                {(showDeleteAlert ? 
                    <ToastContainer className="pos-fix p-3" position="top-end">
                        <Toast className="d-inline-block m-1" onClose={() => setShowDeleteAlert(false)}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Routine Deleted</strong>
                            </Toast.Header>
                            <Toast.Body >
                                Your Routine has been deleted!
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                : null)}
                <div className="horizGroup">
                    <form className="d-flex w-75">
                        <input className="form-control me-2" type="search" placeholder="Search Routines" aria-label="Search"
                        onChange={({target : {value}}) => {
                            const filteredRoutines = routines.filter(routine => RoutineMatches(routine, value.toLowerCase()));
                            const routinesToDisplay = value.length ? filteredRoutines : routines;
                            setDisplayRoutines(routinesToDisplay)
                        }}/>
                    </form>

                    {(token !== "" ? <Link className="btn btn-outline-primary m-3" to="/routines/add">Add a Routine</Link> : null)}
                </div>
                {displayRoutines.map((routine, index) => {
                    return (
                        <div key={index} className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                            <div className="card-header bg-primary text-white">
                                {routine.name}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Goal: {routine.goal}</li>
                                <li className="list-group-item">Creator: {routine.creatorName}</li>
                                <div className="horizGroup">
                                    <button type="button" className="btn btn-outline-danger w-25 m-3" 
                                    onClick={() => {deleteRoutine(routine.id,token,setRoutines, setDisplayRoutines, setShowDeleteAlert, user)}}>Delete</button>
                                    <button type="button" className="btn btn-outline-primary w-25 m-3"
                                    onClick={() => {history.push(`/routines/routine/${routine.id}`)}}>View Routine</button>
                                </div>
                                {routine.activities.map((activity, index) => {
                                    return (
                                        <div key={index}>
                                        <li className="list-group-item">{activity.name}: {activity.description} </li>
                                        <li className="list-group-item">Duration: {activity.duration} </li>
                                        <li className="list-group-item">Count: {activity.count} </li>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>

        )
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

export default MyRoutines;