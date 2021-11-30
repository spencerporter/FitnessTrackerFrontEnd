/** 
 * Add Activity
 */

import React, { useEffect, useState }from "react";
import { Link } from "react-router-dom";
import { fetchAllActivities } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";

async function getActivities(setActivities, setDisplayActivities){
    const activities = await fetchAllActivities();
    setActivities(activities);
    setDisplayActivities(activities);
}


function ActivityMatches(activity, text) {
    if(activity.name.toLowerCase().includes(text)) return true;
    if(activity.description.toLowerCase().includes(text)) return true;

    return false;
}


const Activites = ({token, history}) => {
    const [activities, setActivities] = useState([]);
    const [displayActivities, setDisplayActivities] = useState([]);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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
                    <input className="form-control me-2" type="search" placeholder="Search Activities" aria-label="Search"
                    onChange={({target : {value}}) => {
                        const filteredActivities = activities.filter(activity => ActivityMatches(activity, value.toLowerCase()));
                        const activitiesToDisplay = value.length ? filteredActivities : activities;
                        setDisplayActivities(activitiesToDisplay)
                    }}/>
                </form>
                {(token !== "" ? <Link className="btn btn-outline-primary m-3" to="/activities/add">Add an Activity</Link> : null)}
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
                        <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => {
                            history.push(`/activities/edit/${activity.id}`) 
                        }}                                 
                        >Edit Activity
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Activites;