/**
 * API Calls
 */
import { BASE_URL } from "../constants";
import axios from "axios"

export const api = axios.create({
    baseURL: `${BASE_URL}`,
})

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

export async function getRoutineWithID(routineId){
    try{
        const routines = await fetchAllRoutines();
        for(var i = 0; i < routines.length; i++){
            if(routines[i].id.toString() === routineId.toString()){
                return routines[i];
            }
        }
        return {};
    }catch (error){
        console.error("Isssue Fetching Users Routines", error)
    }
}

export async function getRoutineWithIDForSingleView(routineId, setRoutine){
    try{
        const routines = await fetchAllRoutines();
        for(var i = 0; i < routines.length; i++){
            if(routines[i].id.toString() === routineId.toString()){
                setRoutine(routines[i])
            }
        }
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

export async function getRoutineWithIDForEdit(token, routineId, setName, setGoal, setIsPublic){

    try{
        const routine = await getRoutineWithID(routineId)
        if(routine){
            setName(routine.name);
            setGoal(routine.goal);
            setIsPublic(routine.isPublic);
        }
    }catch (error){
        console.error("Isssue Fetching Users Routines", error)
    }
}
export async function addActivityToRoutine(token, routineId, activityId, count, duration, setRoutine){
    try{
        const options = {
            method: "post",
            url: `${BASE_URL}/routines/${routineId}/activities`,
            data: {
                activityId: activityId,
                count: count,
                duration: duration
            },
        };
        if(token) {
            options.headers = {'Authorization': `Bearer ${token}`};
        }

        await api(options);

        const newRoutine = await getRoutineWithID(routineId);
        setRoutine(newRoutine)
    } catch (error) {
        console.error("Error adding Activity to Routine", error);
    }
}

export async function deleteActivityFromRoutine(token, routineId, routineActivityId, setRoutine) {
    try{
        try{
            const options = {
                method: "delete",
                url: `${BASE_URL}/routine_activities/${routineActivityId}`,
            };
            if(token) {
                options.headers = {'Authorization': `Bearer ${token}`};
            }
    
            await api(options);

            const newRoutine = await getRoutineWithID(routineId);
            setRoutine(newRoutine);
        } catch (error) {
            console.error("Error adding Activity to Routine", error);
        }
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
        if(activities){
            return activities;    
        }
        return [];
    } catch (error) {
        console.error("Error Retriving Activities", error);
    }
}

export async function getActivityWithID(activityId, ){
    try{
        const activities = await fetchAllActivities();
        for(var i = 0; i < activities.length; i++){
            if(activities[i].id.toString() === activityId){
                return activities[i];
            }
        }
        return {};
    }catch (error){
        console.error("Isssue Fetching Users Routines", error)
    }
}

export async function getActivityWithIDForEdit(token, activityId, setName, setDescription){
    try{
        const activity = await getActivityWithID(activityId)
        if(activity){
            setName(activity.name);
            setDescription(activity.description);

        }
    }catch (error){
        console.error("Isssue Fetching Users Routines", error)
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