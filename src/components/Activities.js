/*
TODOs
* Delete Activity (If User = Creator)
* Fix Search
* Remove any reference to Post
*/

import React, { useEffect, useState }from "react";
import { Link , useHistory } from "react-router-dom";
import { fetchAllActivities, getRoutineWithID } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";

async function getActivities(setActivities, setDisplayActivities){
    const activities = await fetchAllActivities();
    setActivities(activities);
    setDisplayActivities(activities);
}

async function deleteRoutineActivity(id, token, user, setActivities, setDisplayActivities, setShowDeleteAlert){ 
    //get routine that routine activity belongs to, and then see if that user created that routine
    
    const routineActivity = await getRoutineActivity(id);

    const activityToDelete = await getRoutineWithID(routineActivity.routineId);

    if (user.id === activityToDelete.creatorId){
        const updatedActivities = await deleteActivityWithID(token, activityId, routineId); 
        getActivities(token, setActivities, setDisplayActivities); 
        setShowDeleteAlert(true);
        return updatedActivities
    }
    
    
 }

function ActivityMatches(activity, text, number) {
    if(activity.name.toLowerCase().includes(text)) return true;
    if(activity.description.toLowerCase().includes(text)) return true;
    if(activity.id.includes(number)) return true; 
    

    // if(activity.description.toLowerCase().includes(text)) return true;
    // if(activity.author.username.toLowerCase().includes(text)) return true;
    // if(activity.location.toLowerCase().includes(text)) return true;
    // if(post.title.toLowerCase().includes(text)) return true;

    // return false;
    return true;
}



const Activites = ({token}) => {
    const [activities, setActivities] = useState([]);
    const [displayActivities, setDisplayActivities] = useState([]);

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const history = useHistory();

    useEffect(() => {
        getActivities(setActivities, setDisplayActivities);
    }, [token]);

    return (
        <div id="activities" className="centered w-75">
            {(showDeleteAlert ? 
                <ToastContainer className="pos-fix p-3" position="top-end">
                    <Toast className="d-inline-block m-1" onClose={() => setShowDeleteAlert(false)}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Activity Deleted</strong>
                        </Toast.Header>
                        <Toast.Body >
                            Your Activity has been deleted!
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            : null)}
            <div className="horizGroup">
                <form className="d-flex w-75">
                    <input className="form-control me-2" type="search" placeholder="Search Posts" aria-label="Search"
                    onChange={({target : {value}}) => {
                        // TODO FIx Search
                        
                        const filteredActivities = activities.filter(activity => ActivityMatches(activity, value.toLowerCase()));
                        const activitiesToDisplay = value.length ? filteredActivities : activities;
                        setDisplayActivities(activitiesToDisplay)
                    }}/>
                </form>
                {(token !== "" ? <Link className="btn btn-outline-primary m-3" to="/posts/add">Add an Activity</Link> : null)}
            </div>
            {displayActivities.map((activity, index) => {
                return (
                    <div key={index} className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                        <div className="card-header bg-primary text-white">
                            {activity.name}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Description: {activity.description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Activites;