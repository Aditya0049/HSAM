import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <section class="navbar-dark bg-dark header ">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="/">
              <img src="https://avatars.githubusercontent.com/u/92391734?s=96&v=4" alt="" width="32" height="32" class="d-inline-block align-text-top" />
            </a>
              <a class="navbar-brand text-white" href="/">HSAM</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link " href="#about">About<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#destinations">Events<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href="#places">Features<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#tourist">Connect-Us<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link btn btn-dark btn-rounded" href="#tourist" target="_blank" rel="noopener noreferrer">Apply<span class="sr-only">(current)</span></a>
                  </li>
                </ul>                
                <a href="https://drive.google.com/file/d/1AR3zqw8AUXoqN7QYMp9cgChjJ1Mo71_y/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-rounded">Admin</a>
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header;
