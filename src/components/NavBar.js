

import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to ="/home" className="nav-link" aria-current="page">Home</Link>                    
                    </li>

                    <li class="nav-item">
                    <Link to ="/sat" className="nav-link" aria-current="page">Saturday</Link>                    
                    </li>

                    <li class="nav-item">
                    <Link to ="/sun" className="nav-link" aria-current="page">Sunday</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        <Outlet />
        </>
    )
}

export default NavBar;