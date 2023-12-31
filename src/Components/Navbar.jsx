import React from 'react'
import logo from '../public/images/logo.png'
import styles from './NavBar.module.css'


function Navbar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" width="100px" height="auto" />
        </a>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="a" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul> */}
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="City" aria-label="Search" />
            <input class="form-control me-2" type="search" placeholder="Experience Level" aria-label="Search" />
            <div class={styles["form-check"]}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class={styles["form-check-label"]} for="flexCheckDefault">
                Pool
              </label>
            </div>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;
