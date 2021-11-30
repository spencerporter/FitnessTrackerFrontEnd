import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router";

import { BASE_URL } from "../constants";


//import axios
//create the api object
//create the options object
//call the api object with the ioptions object as paramater


export const api = axios.create({ 
    baseURL: `${BASE_URL}`,
})

async function AddActivity(token, activity, /*history*/){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    
    const options = {
        method: "post",
        url: `${BASE_URL}/activities`,
        data: {
            name: activity.name,
            goal: activity.description
        },
        };
        if(token) {
        options.headers = {'Authorization': `Bearer ${token}`};
    }
    await api(options);
    history.push(`/activities/`)


return (
    <div id="addRoutine" className="centered m-3">
        <h2>New Activity</h2>
        <form className="w-50" onSubmit={async (event) => {
            event.preventDefault();
            /*const activity = {
                name: name,
                goal: goal
           
            }*/
            //AddActivity(token, activity, history);
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

)}

export default AddActivity