import React, { useContext } from 'react';
import AuthContext from '../../Context/auth';

import { NavLink } from 'react-router-dom'


function Header() {
    const authContext = useContext(AuthContext);

    let doLogin = () => authContext.dispatch({ type: 'login_user' });
    let doLogout = () => authContext.dispatch({ type: 'logout_user' });

    return (

        <header>
            <div className="navbar navbar-dark bg-dark navbar-expand-md shadow-sm">
                <div className="container d-flex justify-content-between">
                    <strong className="navbar-brand d-flex align-items-center">Todo App</strong>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link " exact to="/">Home</NavLink>

                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="me-5">
                    {
                        !authContext.authenticated
                            ? <button className="btn btn-sm btn-success" onClick={doLogin}>Login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>Loout</button>

                    }
                </div>
            </div>
        </header>

    )

}

export default Header;