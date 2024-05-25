import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Header(){

    return(
        <>
            <nav className="z-depth-0">
                <div className="nav-wrapper container">
                     <Link to="/">Phone<span>Book</span></Link>
                        <span className="right grey-text text-darken-1">
                            <i className="material-icons sidenav-trigger" data-target="side-menu">menu</i>
                        </span>
                 </div>
            </nav>
            <div class="center">
        <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
          <i class="material-icons">add</i>
        </a>
      </div>
        </>
    );
}

export default Header;