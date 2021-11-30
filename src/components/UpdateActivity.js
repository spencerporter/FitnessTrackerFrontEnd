import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";

export const api = axios.create({
    baseURL: `${BASE_URL}`,
})

async function UpdateActivity ({activities, getActivities, activity, activityId, token}) {  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

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
    history.push(`/activities/activity/`) //removed ${activityId}

   /* useEffect(() => {
        if(match.params.routineId){
            getRoutineWithIDForEdit(token, match.params.routineId, setName, setGoal, setIsPublic);
        }       
    },[token,match.params.routineId]) */


    const handleSubmit = async (event) => {
        event.preventDefault();
     
        
            /*const data = await response.json();
            console.log('data: ', data);
            if(data && data.name) {
                const newActivities = activities.map(post => {
                    if(activity.id === activityId) {
                        return data;
                    } else {
                        return activity;
                    }
                });
                getActivities(newActivities);
                setName('');
                setDescription('');
            } */

    }

    return <>
        <h4>Update Activity</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="text" placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)} />
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </>

} 

export default UpdateActivity;