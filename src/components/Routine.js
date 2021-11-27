import React, { useEffect, useState } from "react";
import { getRoutineWithID, deleteRoutineWithID } from "../api";

async function deleteRoutine(routineID, token, history){
    await deleteRoutineWithID(token, routineID)
    history.push("/routines");
}

const Routine = ({token, history, match}) => {
    const [routine, setRoutine] = useState({})
    
    useEffect(() => {
        getRoutineWithID(token, match.params.routineId, setRoutine);
    },[token,match.params.routineId])

    if(routine._id){
        return (
            <div className="centered">
                <div className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                    <div className="card-header bg-primary text-white">
                        {routine.title}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Description: {routine.description}</li>
                        <li className="list-group-item">Author: {routine.author.username}</li>
                        <li className="list-group-item">Location: {routine.location}</li>
                        <li className="list-group-item">Price: {routine.price}</li>
                        {routine.willDeliver ? <li className="list-group-item">Will Deliver</li> : <li className="list-group-item">Will NOT Deliver</li>}
                        <div className="horizGroup">
                            <button type="button" className="btn btn-outline-primary w-25 m-3" 
                                onClick={() => {
                                    history.push(`/routines/routine/edit/${routine._id}`);
                                }}>Edit Routine</button>
                            <button type="button" className="btn btn-outline-danger w-25 m-3" onClick={() => {deleteRoutine(routine._id,token, history)}}>Delete</button>
                        </div>
                    </ul>
                </div>
                <div id="messages" className="centered w-100">
                    <h2>Messages Pertaining to this Routine</h2>
                    {
                        routine.messages.map((message, index) => {
                            return (
                                <div key={index} className="card w-75 p-3 border-dark m-3 shadow bg-body rounded">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><h3>Routine: {message.routine.title}</h3></li>
                                        <li className="list-group-item">From: {message.fromUser.username}</li>
                                        <li className="list-group-item">Message: {message.content}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default Routine;