/**
 * API Calls
 */
import { BASE_URL } from "../constants";


/**
 * Routines Functions
 */
export async function fetchAllRoutines(){
    try {
        const response = await fetch(`${BASE_URL}/routines`)
        const result = await response.json();
        const routines = result;
        return routines;
    } catch (error) {
        console.error("Error Retriving Routines", error);
    }
}

export async function fetchRoutinesByUsername(username){
    
    try {
        const response = await fetch(`${BASE_URL}/users/${username}/routines`)
        var result = null;
        try{
            result = await response.json();        
        }catch(error){
            console.log("No Routines Found")
        }
        if(result){
            return result;
        }else{
            return [];
        }
    } catch (error) {
        console.error("Error Retriving Routines", error);
    }
}

export async function getRoutineWithID(token, routineId, setRoutine){
    try{
        const routines = await fetchAllRoutines();
        for(var i = 0; i < routines.length; i++){
            if(routines[i].id === routineId){
                return routines[i];
            }
        }
        return {};
    }catch (error){
        console.error("Isssue Fetching Users Routines", error)
    }
}

export async function deleteRoutineWithID(token, routineId){
    try{
        
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result;
    }catch (error){
        console.error("Deleting User's Routine", error)
    }
}

export async function addActivityToRoutine(routineId, activityId, count, duration){
    try{
        
        const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
            method: "POST",
            body: JSON.stringify({
                activityId: activityId,
                count: count,
                duration: duration
            })
        })
        const result = await response.json();
        const attachedActivity = result;
        return attachedActivity;
    } catch (error) {
        console.error("Error adding Activity to Routine", error);
    }
}

export async function deleteActivityFromRoutine(token, routineActivityId) {
    try{
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        const deletedActivity = result;
        return deletedActivity;
    } catch (error) {
        console.error("Error deleting Activity", error);
    }
}

/**
 * Activities Functions
 */
export async function fetchAllActivities(){
    try {
        const response = await fetch(`${BASE_URL}/activities`)
        const result = await response.json();
        const activities = result;
        return activities;
    } catch (error) {
        console.error("Error Retriving Activities", error);
    }
}

/**
 * Delete All Below when Replaced
 */


export async function getPostWithIDForEdit(token, postID, setTitle, setDescription, setPrice, setLocation, setWillDeliver){
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        const posts = result.data.posts;

        posts.forEach((post) => {
            if(post._id === postID) {
                setTitle(post.title);
                setDescription(post.description);
                setPrice(post.price);
                setLocation(post.location);
                setWillDeliver(post.willDeliver);
            }
        })
    }catch (error){
        console.error("Isssue Fetching Users Posts", error)
    }
}

/**
 * User Functions
 */

export async function login(username, password){
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error retriving Posts", error);
    }
}

export async function register(username, password){
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error retriving Posts", error);
    }
}

export async function getUser(token, setUser){
    fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
    .then(response => response.json())
    .then(result => {
        setUser(result)
        localStorage.setItem("user", result);
    })
    .catch(console.error);
}