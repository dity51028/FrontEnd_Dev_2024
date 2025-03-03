import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsPlus</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="nav-link active" onClick={()=>{setCategory("science")}}>Science</div>
  
        </li>
          <div class="nav-link active" onClick={()=>{setCategory("sports")}}>sports</div>
          <div class="nav-link active" onClick={()=>{setCategory("Technology")}}>Technology</div>
        
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar