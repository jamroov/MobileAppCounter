import React from "react";

const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            {console.log("Counters - rendered")}
            <a className="navbar-brand" href="#">
                Navbar: 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;