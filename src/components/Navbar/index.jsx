import React from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom"


const Navbar = () => {
    const history = useHistory();
    const logout = () => {
      Cookies.remove("token");
      console.log("logout");
          history.push("/");
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Social Network</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/register" className="nav-item nav-link ">Register</Link>
                    <Link to="/login" className="nav-item nav-link ">Login</Link>
                    <Link to="/profile" className="nav-item nav-link ">Profile</Link>
                    <button onClick={logout} className="m-2 btn btn-danger">Logout</button>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar

