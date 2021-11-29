import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";

export const api = axios.create({
    baseURL: `${BASE_URL}`,
})

export default function UpdateActivity ({activities, getActivities, activityId, token}) {  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const options = {
        method: "patch",
        url: `${BASE_URL}/routines/${routineId}`,
        data: {
            name: activity.name,
            description: activity.description,
           
        },
        };
        if(token) {
        options.headers = {'Authorization': `Bearer ${token}`};
    }
    await api(options);
    history.push(`/routines/routine/${routineId}`)


    const handleSubmit = async (event) => {
        event.preventDefault();
     
        
            const data = await response.json();
            console.log('data: ', data);
            if(data && data.title) {
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
            }

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