import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import shoe from '../images/hero1.jpg'

const Bottom = () => {
  return (
    <>
    <section className='footer'>
<div className='container'>
    
<div class='row'>
<div className='row'>
    <h4>Navigations</h4>
    <ul className='ordered col-lg-2 mt-3'>
        <li>Sell online</li>
        <li>Features</li>
        <li>Shopping cart</li>
        <li>Store builder</li>
    </ul>
<ul className='ordered col-lg-2 mt-3'>
        <li>Mobile commerce</li>
        <li>Dropshipping</li>
        <li>Website development</li>
        
    </ul>
    <ul className='ordered col-lg-2 mt-3'>
        <li>Point of sale</li>
        <li>Hardware</li>
        <li>Software</li>
        </ul>
<div className='row col-lg-3'>
<div class="pictures">
<h4>Promo</h4>
<img src={shoe}style={{width:"100%"}}></img>

<h3 className='mt-3'style={{fontSize:"18px",color:"#7971EA"}}>Finding your perfect shoes</h3>
</div>
</div>


<div className='row col-lg-3'style={{marginLeft:"30px"}}>
<div class="pictures1">
<h4 className='mt-3'>Contact info</h4>
<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
<h5>+23923929210</h5>
<p>emailaddress@domain.com</p>

<h3 className='mt-5'style={{fontSize:"18px",color:"#7971EA"}}>SUBSCRIBE</h3>
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/> 
    <label for="floatingInput">Email address</label><br></br>
  <button className='mt-4' type="button" class="btn btn-primary">SEND</button>
  
</div>

</div>
</div>

</div>
</div>
</div>

    </section>
    </>
    
  )
}

export default Bottom

