import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Register } from 'pages/Register/Register';

const AppBar = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                </ul>
            </header>
            <main>
                <Suspense fallback={<div>loading ...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}



export default AppBar;