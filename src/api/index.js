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
export async function getPostWithID(token, postID, setPost){
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
                setPost(post);
            }
        })
    }catch (error){
        console.error("Isssue Fetching Users Posts", error)
    }
}

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



export async function deletePostWithID (token, postID){
    try{
        const response = await fetch(`${BASE_URL}/posts/${postID}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result;
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
        console.log(`${BASE_URL}/users/register`)
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
    console.log("Getting User", token)
    fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        setUser(result)
        localStorage.setItem("user", result);
    })
    .catch(console.error);
}