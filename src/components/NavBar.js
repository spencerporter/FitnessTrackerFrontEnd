import React from "react";
import { Link} from 'react-router-dom';

const NavBar = ({token, setToken}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="d-flex justify-content-between p-3">
                <a className="navbar-brand fs-2" href="/">FitnessTrac.kr</a>

                <div className="collapse navbar-collapse fs-3" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link active" to="/routines">Routines</Link>
                        <Link className="nav-link active" to="/activities">Activities</Link>
                        <Link className="nav-link active" to="/myRoutines">My Routines</Link>
                        {(!token ? <Link className="nav-link active" to="/login">Log In</Link> : 
                            <Link className="nav-link active" to="/login" onClick={(event) => {
                                localStorage.removeItem("token");
                                setToken("");
                        }}>Log Out</Link>)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;