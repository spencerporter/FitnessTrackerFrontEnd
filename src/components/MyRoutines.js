import React, {useState, useEffect} from "react";
import { Link , useHistory } from "react-router-dom";
import { fetchRoutinesByUsername } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";
import { getUser } from "../api";

async function getUsersRoutines(user, setRoutines, setDisplayRoutines){ 
    console.log("User for My Routines", user.username);
    const routines = await fetchRoutinesByUsername(user.username);
    console.log("routines for my User", routines);
    setRoutines(routines);
    setDisplayRoutines(routines);
}

// async function deletePost(postID, token, setPosts, setDisplayPosts, setShowDeleteAlert){
//     await deletePostWithID(token, postID)
//     getPosts(token,setPosts, setDisplayPosts);
//     setShowDeleteAlert(true);
// }

function RoutineMatches(post, text) {
    // if(post.description.toLowerCase().includes(text)) return true;
    // if(post.author.username.toLowerCase().includes(text)) return true;
    // if(post.location.toLowerCase().includes(text)) return true;
    // if(post.price.toLowerCase().includes(text)) return true;
    // if(post.title.toLowerCase().includes(text)) return true;

    // return false;
    return true;
}

const MyRoutines = ({token, history}) => {
    const [user, setUser] = useState({});
    const [routines, setRoutines] = useState([]);
    const [displayRoutines, setDisplayRoutines] = useState([]);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    
    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }
    }, [token])

    useEffect(() => {
        if(user.username){
            getUsersRoutines(user, setRoutines, setDisplayRoutines);
        }
    }, [user]);

    if(user.username){
        return (
            <div id="routines" className="centered w-75">
                <h1> Welcome: {user.username} </h1> 
                {(showDeleteAlert ? 
                    <ToastContainer className="pos-fix p-3" position="top-end">
                        <Toast className="d-inline-block m-1" onClose={() => setShowDeleteAlert(false)}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Routine Deleted</strong>
                            </Toast.Header>
                            <Toast.Body >
                                Your Routine has been deleted!
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                : null)}
                <div className="horizGroup">
                    <form className="d-flex w-75">
                        <input className="form-control me-2" type="search" placeholder="Search Routines" aria-label="Search"
                        onChange={({target : {value}}) => {
                            // TODO FIx Search
                            
                            // const filteredRoutines = posts.filter(post => RoutineMatches(post, value.toLowerCase()));
                            // const routinesToDisplay = value.length ? filteredRoutines : routines;
                            // setDisplayRoutines(routinesToDisplay)
                        }}/>
                    </form>

                    {(token !== "" ? <Link className="btn btn-outline-primary m-3" to="/posts/add">Add a Post</Link> : null)}
                </div>
                {displayRoutines.map((routine, index) => {
                    return (
                        <div key={index} className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                            <div className="card-header bg-primary text-white">
                                {routine.name}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Goal: {routine.goal}</li>
                                <li className="list-group-item">Creator: {routine.creatorName}</li>
                                {/* TODO Show Activites */}
                            </ul>
                        </div>
                    )
                })}
            </div>

        )
    }else{
        return (
            <div className="centered m-3">
                <h1>Please Login to see your Routines</h1>
                <button type="button" className="btn btn-outline-primary" onClick={(event) =>{
                    event.preventDefault();
                    history.push("/login");
                }}>Log In</button>
            </div>);
    }
}

export default MyRoutines;