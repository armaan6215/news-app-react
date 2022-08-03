import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">About</Link>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu text-white bg-dark">
            <li><Link className="dropdown-item text-light" to="/">General</Link></li>
            <li><Link className="dropdown-item text-light" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item text-light" to="/science">Science</Link></li>
            <li><Link className="dropdown-item text-light" to="/health">Health</Link></li>
            <li><Link className="dropdown-item text-light" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item text-light" to="/business">Business</Link></li>
            <li><Link className="dropdown-item text-light" to="/technology">Technology</Link></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Countries
          </Link>
          <ul className="dropdown-menu bg-dark">
            <li><Link className="dropdown-item text-light" to="/australia">Australia</Link></li>
            <li><Link className="dropdown-item text-light" to="/india">India</Link></li>
            <li><Link className="dropdown-item text-light" to="/newzealand">Newzealand</Link></li>
            <li><Link className="dropdown-item text-light" to="/russia">Russia</Link></li>
            <li><Link className="dropdown-item text-light" to="/usa">USA</Link></li>
            <li><Link className="dropdown-item text-light" to="/uae">UAE</Link></li>
          </ul>
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
}