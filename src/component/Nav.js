import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  
    return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h1 class="navbar-brand fs-2" href="#">SHOPPERS</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style={{marginLeft:"200px", gap:"50px"}}>
      <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/shop'>SHOP</Link></li>
                <li><Link to='/cart'>CART</Link></li>
                <li><Link to='/newarrivals'>NEWARRIVALS</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
                </ul>

                <form class="d-flex" role="search" style={{gap:"5px", marginLeft:"60px"}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
        </>
    )
  }
  
 

export default Nav