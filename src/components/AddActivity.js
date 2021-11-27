import React, { useState } from "react";

import Activities, {getActivities} from "./Activities";

export default function AddActivity ({token, getActivities, activities}){ 
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div>
            <h4>Create a new Activity</h4>
            <form onSubmit={async (event) => {
                event.preventDefault();

                fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                    method: "POST",
                    headers: {'Authorization': `Bearer ${token}`},
                    body: JSON.stringify({
                        name: name,
                        description: description
                    })
                }).then(response => response.json())
                .then(result => {
                console.log(result);
                getActivities(
                    [...activities, result.data.activity]
                )
                })
                .catch(console.error);
             }}> 
        
        <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
                console.log(name);
                setName(event.target.value);
            }} 
            value = {name} 
            />
        
        <input
            type="text"
            placeholder="Description"
            onChange={(event) => {
                console.log(description);
                setDescription(event.target.value);
            }} 
            value = {description} 
            />

        <button type="submit" >Submit</button>       
        </form>
    </div>

)
}