import React from 'react'
import blog from '../images/blog1.webp'
import person1 from '../images/person1.webp'
import person2 from '../images/person2.webp'
import person3 from '../images/person3.webp'
import person4 from '../images/person4.webp'
import './about.css'


const About = () => {
  return (
    <>
    <section className='about'>

<h1 className=' container mt-5 p-2'>About</h1>
<center>
<div className='container row'>
<div className='col-lg-6'>
<img src={blog} style={{width:'100%'}}/>
</div>

<div className='col-lg-6 mt-2'>
<h2 className='fs-2 text-start'style={{color:"#7971EA"}}>How we started</h2>
<p className='fs-5 opacity-75 text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
<p className='fs-5 opacity-75 text-start'>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>

</div>
</div>
</center>
<hr></hr>

</section>

<section className='team'>
  <div className='container'>
<center>
<h2 className='mt-5' style={{color:"#7971EA"}}>The Team</h2>
</center>

<div className='tree4 row mt-5'>
  
  <div className='col-md-6 col-lg-3'>

          <img src={person1} alt='' style={{borderRadius:'450px',width:'125px'}}/>
          <h3 className='mt-5'style={{color:"#000000"}}>Elizabeth Graham</h3>
          <p className='opacity-75 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
        </div>  
        
        <div className='col-md-6 col-lg-3'>
          <img src={person2} style={{borderRadius:'450px',width:'125px'}} alt=''/>
        <h3 className='mt-5'style={{color:"#000000"}}>Jennifer Greive</h3>
          <p className='opacity-75 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
          </div>

          <div className='col-md-6 col-lg-3'>
          <img src={person3} style={{borderRadius:'450px',width:'125px'}} alt=''/>
        <h3 className='mt-5'style={{color:"#000000"}}>Patrick Marx</h3>
          <p className='opacity-75 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
          </div>

          <div className='col-md-6 col-lg-3'>
          <img src={person4} style={{borderRadius:'450px',width:'125px'}} alt=''/>
        <h3 className='mt-5'style={{color:"#000000"}}>Mike Coolbert</h3>
          <p className='opacity-75 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
        
          </div>
         
          </div>
          
          
          <hr></hr>
          </div>
</section>

<section className='reverse'>
<div class='tree2 container mt-5'>
   <div class="row">
    <div class='para1 col-md-4'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-truck-" viewBox="0 0 16 16" color='#7971EA'>
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
<br></br>
<h5 class='mt-3 fs-4'>FREE SHIPPING</h5>
<p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
 </div>

<div class='para2 col-md-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16" color='#7971EA'>
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
</svg>

<h5 class='mt-3 fs-4'>FREE RETURNS</h5>
<p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
 </div>

 <div class='para3 col-md-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16" color='#7971EA'>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>


<h5 class='mt-3 fs-4'>CUSTOMER SUPPORT</h5>
<p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
 </div>
</div>
</div>
<br></br>
<hr></hr>






</section>
</>
)
}

export default About