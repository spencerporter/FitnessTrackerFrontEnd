/*
TODOs
* Delete Post (If User = Creator)
* Fix Search
* Remove any reference to Post
* Show Activites
*/

import React, { useEffect, useState }from "react";
import { Link , useHistory } from "react-router-dom";
import { fetchAllRoutines } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";

async function getRoutines(setRoutines, setDisplayRoutines){
    const routines = await fetchAllRoutines();
    setRoutines(routines);
    setDisplayRoutines(routines);
}

// async function deletePost(postID, token, setPosts, setDisplayPosts, setShowDeleteAlert){
//     await deletePostWithID(token, postID)
//     getPosts(token,setPosts, setDisplayPosts);
//     setShowDeleteAlert(true);
// }

function RoutineMatches(routine, text) {
    if(routine.name.toLowerCase().includes(text)) return true;
    if(post.creatorName.toLowerCase().includes(text)) return true;
    if(post.goal.toLowerCase().includes(text)) return true;

    //return true;
    return false;
}

const Routines = ({token}) => {
    const [routines, setRoutines] = useState([]);
    const [displayRoutines, setDisplayRoutines] = useState([]);

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const history = useHistory();

    useEffect(() => {
        getRoutines(setRoutines, setDisplayRoutines);
    }, []);

    return (
        <div id="posts" className="centered w-75">
            {(showDeleteAlert ? 
                <ToastContainer className="pos-fix p-3" position="top-end">
                    <Toast className="d-inline-block m-1" onClose={() => setShowDeleteAlert(false)}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Post Deleted</strong>
                        </Toast.Header>
                        <Toast.Body >
                            Your Post has been deleted!
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            : null)}
            <div className="horizGroup">
                <form className="d-flex w-75">
                    <input className="form-control me-2" type="search" placeholder="Search Routines" aria-label="Search"
                    onChange={({target : {value}}) => {
                        // TODO FIx Search
                        
                        const filteredRoutines = routines.filter(routine => RoutineMatches(routine, value.toLowerCase()));
                        const routinesToDisplay = value.length ? filteredRoutines : routines;
                        setDisplayRoutines(routinesToDisplay)
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
}

export default Routines;