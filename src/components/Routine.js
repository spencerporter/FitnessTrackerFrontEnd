import React, { useEffect, useState } from "react";
import { getRoutineWithIDForSingleView, deleteRoutineWithID, fetchAllActivities, addActivityToRoutine, deleteActivityFromRoutine } from "../api";

async function deleteRoutine(routineID, token, history){
    await deleteRoutineWithID(token, routineID)
    history.push("/routines");
}

async function getAllActivities(setActivities){
    try{
        const activities = await fetchAllActivities();
        setActivities(activities);
    }catch(error){
        console.error("Error getting activities");
    }
}

const Routine = ({token, history, match, user}) => {
    const routineId = match.params.routineId;
    const [routine, setRoutine] = useState({})
    const [activities, setActivities] = useState({})
    var isCreator = false;
    useEffect(() => {
        getAllActivities(setActivities);
    }, []);

    useEffect(() => {
        if(routineId){
            getRoutineWithIDForSingleView(routineId, setRoutine);
        }
    },[routineId])
    if(user){
        isCreator = (user.username === routine.creatorName)
    }
    console.log("Loaded with User", user, isCreator)

    if(routine.id){
        return (
            <div className="centered">
                <div className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                    <div className="card-header bg-primary text-white">
                        {routine.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Goal: {routine.goal}</li>
                        <li className="list-group-item">Creator: {routine.creatorName}</li>
                        <div className="horizGroup">
                            { isCreator?
                                <button type="button" className="btn btn-outline-primary w-25 m-3" 
                                    onClick={() => {
                                        history.push(`/routines/edit/${routine.id}`);
                                    }}>Edit Routine</button>
                                :
                                null  
                            }
                            { isCreator?
                                <button type="button" className="btn btn-outline-danger w-25 m-3" onClick={() => {deleteRoutine(routine.id,token, history)}}>Delete</button>
                                :
                                null  
                            }
                            {routine.activities.map((activity, index) => {
                                return (
                                    <div key={index}>
                                        <li className="list-group-item">{activity.name}: {activity.description} </li>
                                        <li className="list-group-item">Duration: {activity.duration} </li>
                                        <li className="list-group-item">Count: {activity.count} </li>
                                        { isCreator?
                                            <button type="button" className="btn btn-outline-danger w-25 m-3" onClick={() => 
                                                {deleteActivityFromRoutine(token, activity.routineActivityId)}}>Remove Activity</button>
                                            :
                                          null  
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <div className="horizGroup">
                            <select name="activitySelector" form="addActions">
                                    {activities.map((activity, index) => {
                                        return(
                                            <option key={index} value={activity.id}>{activity.name}</option>
                                        )
                                    })
                                    }
                            </select>
                            <form id="addActions" onSubmit = {(event) => {
                                event.preventDefault();
                                const duration = event.target.duration.value;
                                const count = event.target.count.value;
                                const activityId = event.target.activitySelector.value;
                                addActivityToRoutine(token,routine.id, activityId, count, duration);
                            }}>
                                <label htmlFor="duration" className="form-label">Duration:</label>
                                <input type="text" name="duration" className="form-control"></input>
                                <label htmlFor="count" className="form-label">Count:</label>
                                <input type="text" name="count" className="form-control"></input>
                                <input type="submit" value="Add Activity" className="btn btn-primary"></input>
                            </form>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default Routine;