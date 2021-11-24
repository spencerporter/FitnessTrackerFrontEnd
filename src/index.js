import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import { getUser } from './api';

import {
    AddEditRoutines,
    Home,
    LogIn,
    NavBar, Routines, MyRoutines, Routine, Activities
} from "./components"
const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({
        username: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setToken(token);
            getUser(token, setUser);
        }
    }, [])

    return (
        <div className="app">
            <BrowserRouter>
                <NavBar token={token} setToken={setToken}/>
                <Route exact path="/" render={() => <Home token={token} user={user} />} />
                <Route exact path="/routines" render={() => <Routines token={token} user={user} />}/>
                <Route exact path="/activities" render={() => <Activities token={token} user={user} />}/>
                <Route exact path="/posts/add" render={(routeProps) => <AddEditRoutines token={token} user={user} isAdd={true} {...routeProps}/>}  />
                <Route path="/posts/post/:postId" render={(routeProps) => <Routine token={token} user={user} {...routeProps} />}/>
                <Route path="/posts/post/edit/:postId" render={(routeProps) => <AddEditRoutines token={token} user={user} isAdd={false} {...routeProps}/>}  />
                <Route path="/myRoutines" render={(routeProps) => <MyRoutines token={token} {...routeProps} />} />
                <Route path="/login" render={(routeProps) => <LogIn setToken={setToken} setUser={setUser} {...routeProps}/>}  />
                <Route path="/register" render={(routeProps) => <LogIn setToken={setToken} setUser={setUser} {...routeProps}/>}  />
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));