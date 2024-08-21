import { useState } from "react"
import {useDispatch} from 'react-redux'
import actions from '../../../redux/authenticate/actions';
import {useSelector} from 'react-redux'

import { Link } from 'react-router-dom';
function Header(props) {

    const dispatch = useDispatch();
    const logout = () =>{
     
        dispatch({
            type: actions.LOGOUT,
            // payload: {'email': 'diksha.tester@richestsoft.in', 'password': 'Rich@12345'},
          });
    }

    return (
        <section>
             <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/conact-us">Contact us</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                {
                    props.isAuthenticated
                    ? <><li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li><li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li><li className="nav-item">
                        <Link className="nav-link" to="" onClick={logout}>Logout</Link>
                    </li></>
                    : <><li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li><li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li></>
                }
                </ul>
            </nav>
        </section>
    )
}

export default Header;