import React, { useState } from "react";

export default function UpdateActivity ({activities, getActivities, avitivityId, token}) {   //headers
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
     
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities/9', {
            method: "PATCH",
            headers: {'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
              name: name,
              description: description,
              header: header
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
            
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