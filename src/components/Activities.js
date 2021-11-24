/*
TODOs
* Delete Activity (If User = Creator)
* Fix Search
* Remove any reference to Post
*/

import React, { useEffect, useState }from "react";
import { Link , useHistory } from "react-router-dom";
import { fetchAllActivities } from "../api";
import { Toast, ToastContainer } from "react-bootstrap";

async function getActivities(setActivities, setDisplayActivities){
    const activities = await fetchAllActivities();
    setActivities(activities);
    setDisplayActivities(activities);
}

// async function deletePost(postID, token, setPosts, setDisplayPosts, setShowDeleteAlert){
//     await deletePostWithID(token, postID)
//     getPosts(token,setPosts, setDisplayPosts);
//     setShowDeleteAlert(true);
// }

function ActivityMatches(post, text) {
    // if(post.description.toLowerCase().includes(text)) return true;
    // if(post.author.username.toLowerCase().includes(text)) return true;
    // if(post.location.toLowerCase().includes(text)) return true;
    // if(post.price.toLowerCase().includes(text)) return true;
    // if(post.title.toLowerCase().includes(text)) return true;

    // return false;
    return true;
}

const Activites = ({token}) => {
    const [activities, setActivities] = useState([]);
    const [displayActivities, setDisplayActivities] = useState([]);

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const history = useHistory();

    useEffect(() => {
        getActivities(setActivities, setDisplayActivities);
    }, [token]);

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
                    <input className="form-control me-2" type="search" placeholder="Search Posts" aria-label="Search"
                    onChange={({target : {value}}) => {
                        // TODO FIx Search
                        
                        // const filteredRoutines = posts.filter(post => RoutineMatches(post, value.toLowerCase()));
                        // const routinesToDisplay = value.length ? filteredRoutines : routines;
                        // setDisplayRoutines(routinesToDisplay)
                    }}/>
                </form>

                {(token !== "" ? <Link className="btn btn-outline-primary m-3" to="/posts/add">Add a Post</Link> : null)}
            </div>
            {displayActivities.map((activity, index) => {
                return (
                    <div key={index} className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                        <div className="card-header bg-primary text-white">
                            {activity.name}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Description: {activity.description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Activites;