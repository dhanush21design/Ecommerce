import './hom.css'
import danush from '../images/wom.webp'
import suriya from '../images/child.webp'
import img1 from '../images/men.webp'
import cloth from '../images/cloth1.webp'
import cloth2 from '../images/cloth2.webp'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import shoe from '../images/shoe2.webp'
import cloth3 from '../images/cloth3.webp'
import blog from '../images/blog1.webp'
import promo from '../images/hero_1.jpg'


const Hom = () => {
  
  return (
  <>
  
  <div class='image container-fluid'>
  <div class='content'>
   <h1 className='heading mt-2'>FINDING YOUR PERFECT SHOES</h1>
   <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
   <button type="button" class="btn btn-danger">SHOP NOW</button>
   </div>
    
   </div>

   
   
   
   
   
   <div class='tree2 container mt-5'>
   <div class="row">
    <div class='para1 col-md-4'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-truck-" viewBox="0 0 16 16" color='#7971EA'>
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
<br></br>
<h5 class='mt-3'>FREE SHIPPING</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
 </div>

<div class='para2 col-md-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16" color='#7971EA'>
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
</svg>

<h5 class='mt-3'>FREE RETURNS</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
 </div>

 <div class='para3 col-md-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16" color='#7971EA'>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>


<h5 class='mt-3'>CUSTOMER SUPPORT</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
 </div>
</div>
</div>
<br></br>
<hr></hr>


<section className='collection'>
  <div className='container '>
    <div className='row col-lg-12 col-md-12 col-sm-12'>
      <div className='col-lg-4'>
        <img src={danush} alt='im4'/>
        <p class='mt-3'>COLLECTIONS</p>
        <h2>Women</h2>
      </div>
      <div className='col-lg-4'>
      <img src={suriya} alt='img'/>
      <p class='mt-3'>COLLECTIONS</p>
        <h2>Children</h2>
      </div>
      <div className='col-lg-4'>
      <img src={img1} alt='img'/>
      <p class='mt-3'>COLLECTIONS</p>
        <h2>Men</h2>
      </div>
    </div>
  </div>
</section>
<hr></hr>


<section className='products'>



  <center>
<h3 class='mt-5'>FEATURED PRODUCTS</h3>
</center>

<center>
<div class='container row'>
  <div className='col-md-8 col-lg-12'>

<div class='mt-5'>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={cloth} alt=''/>
          <h3 className='mt-5'style={{color:"#7971EA"}}>Tank top</h3>
          <p>finding perfect t-shirt</p>
          <h4 class='dollar' style={{fontSize:"20px"}}>$50</h4>
        </SwiperSlide>
        <SwiperSlide><img src={shoe} alt=''/>
        <h3 className='mt-5'style={{color:"#7971EA"}}>Corater</h3>
          <p>finding perfect products</p>
          <h4 class='dollar' style={{fontSize:"20px"}}>$50</h4></SwiperSlide>
        
        <SwiperSlide>
          <img src={cloth2} alt=''/>
        <h3 className='mt-5'style={{color:"#7971EA"}}>Polo Shirt</h3>
          <p>finding perfect products</p>
          <h4 class='dollar' style={{fontSize:"20px"}}>$50</h4></SwiperSlide>
        
        <SwiperSlide><img src={cloth3} alt=''/>
        <h3 className='mt-5'style={{color:"#7971EA"}}>T-shirt Mockup</h3>
          <p>finding perfect products</p>
          <h4 class='dollar' style={{fontSize:"20px"}}>$50</h4></SwiperSlide>
        
       
      </Swiper>



</div>

</div>
</div>
</center>

<br></br>
<hr></hr>
</section>


<section className='big sale'>

<center><h3 className='heading' style={{marginTop:"80px"}}>Big sale !</h3>
</center>

<div class='container mt-5 row' >
  <div className='col-lg-8'>
<div class="image1">
  
<img src={blog} style={{marginTop:"50px", width:"100%"}} alt='blog'/>
</div>
</div>

<div className='col-lg-4' style={{marginTop:"100px"}}>

<h1 className='content2' style={{color:"#7971EA"}}>50% less in all items</h1>
<p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>

<button type="button" class="btn" style={{backgroundColor:"#7971EA", color:"white"}}>SHOP NOW</button>

</div>
</div>

</section>
<br></br>

<hr>
</hr>


<section className='details'>

{/* <div class='container'>
<h2 class="mt-5" style={{fontSize:"25px"}}>Navigations</h2>
<div className='row '>
<div class=' tree2 col-lg-10 d-flex  mt-3' style={{gap:"15px"}}>

<ol className='list' style={{listStyle:"none", fontSize:"15px", width:"150px", gap:"15px"}}>
   <li>Sell online</li>
  <li class='g-3'>Features</li>
  <li>Shopping cart</li>
  <li>Store builder</li>
  </ol>
  <ol className='list' style={{listStyle:"none", fontSize:"15px", width:"150px", gap:"15px"}}>
   <li>mobile commerce</li> 
  <li>Drop shipping</li>
  <li>Website development</li>
  
  </ol>
  <ol className='list' style={{listStyle:"none", fontSize:"15px", width:"300px", gap:"15px"}}>
   <li>Point of sale</li> 
  <li>Hardware</li>
  <li>Software</li>
  
  </ol>



<div className='promo float-start'>
<div class='img'>
  <h2 className='heading '>PROMO</h2>
<img src={promo} style={{width:"250px"}}alt='img3'/>


</div>
</div>
</div>
  
</div>
</div> */}


</section>


</>

   
    )
}

export default Hom