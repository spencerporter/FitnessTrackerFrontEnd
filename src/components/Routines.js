/*
TODOs
* Delete Post (If User = Creator)
* Fix Search
* Remove any reference to Post
* Show Activites
*/

import React, { useEffect, useState }from "react";
import { Link , useHistory } from "react-router-dom";
import { fetchAllRoutines, deleteRoutineWithID, getUser } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";


async function getRoutines(setRoutines, setDisplayRoutines){
    const routines = await fetchAllRoutines();
    setRoutines(routines);
    setDisplayRoutines(routines);
}

async function deleteRoutine(routineID, token, setRoutines, setDisplayRoutines, setShowDeleteAlert){
    await deleteRoutineWithID(token, routineID)
    getRoutines(token, setRoutines, setDisplayRoutines);
    setShowDeleteAlert(true);
}

function RoutineMatches(routine, text) {
    if(routine.name.toLowerCase().includes(text)) return true;
    if(routine.creatorName.toLowerCase().includes(text)) return true;
    if(routine.goal.toLowerCase().includes(text)) return true;

    //return true;
    return false;
}

const Routines = ({token}) => {
    const [routines, setRoutines] = useState([]);
    //const [activities, setActivities] = useState([]);
    const [displayRoutines, setDisplayRoutines] = useState([]);
    //const [displayActivities, setDisplayActivities] = useState([]);

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const history = useHistory();

    const [user, setUser] = useState({});

    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])
    
    useEffect(() => {
        getRoutines(setRoutines, setDisplayRoutines);
    }, []);

    console.log(user, displayRoutines);
    return (
        <div id="routines" className="centered w-75">
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
            { displayRoutines.map((routine, index) => {
                return (
                    <div key={index} className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                        <div className="card-header bg-primary text-white">
                            {routine.name}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Goal: {routine.goal}</li>
                            <li className="list-group-item">Creator: {routine.creatorName}</li>
                            {routine.activities.map((activity, index) => {
                                return (
                                    <div key={index}>
                                    <li className="list-group-item">{activity.name}: {activity.description} </li>
                                    </div>
                                )
                            })}
                            { <button type="button" className="btn btn-outline-primary w-25 m-3"
                                    onClick={() => {history.push(`/routines/routine/${routine._id}`)}}>View Routine</button>}
                            { user.username && (user.username === routine.creatorName) ?
                                    <div className="horizGroup">
                                    <button type="button" className="btn btn-outline-danger w-25 m-3" onClick={() => {
                                        deleteRoutine(routine.id, token, setRoutines, setDisplayRoutines, setShowDeleteAlert)
                                    }}>Delete</button>
                                    </div> :
                                    null
                            }
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Routines;