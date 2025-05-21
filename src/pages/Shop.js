import React from 'react'
import p1 from '../images/cloth1.webp'
import p2 from '../images/cloth2.webp'
import p3 from '../images/cloth3.webp'
import p4 from '../images/shoe2.webp'
import p5 from '../images/download (1).jpg'
import p6 from '../images/download (2).jpg'
import p7 from '../images/images.jpg'
import p8 from '../images/formal.jpg'
import p9 from '../images/suit.jpg'
import './shop.css'
import danush from '../images/wom.webp'
import suriya from '../images/child.webp'
import img1 from '../images/men.webp'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, deleteFromCart } from '../tool/Cartslice'



const Shop = () => {

  const prod = [
    {
      id:1,
      name:"Tank top",
      des:"Finding perfect t-shirt",
      price:90,
      image:p1,
      quantity:1,
    },
    {
      id:2,
      name:"Polo shirt",
      des:"Finding perfect products",
      price:150,
      image:p2,
      quantity:1,

    },
    {
      id:3,
      name:"T-shirt mockup",
      des:"Finding perfect products",
      price:150,
            image:p3,
            quantity:1,

    },
    {
      id:4,
      name:"Corater",
      des:"Finding perfect products",
      price:200,
            image:p4,
            quantity:1,

    },
    {
      id:5,
      name:"Fit shirt",
      des:"Finding perfect products",
      price:250,
            image:p5,
            quantity:1,

    },

    {
      id:6,
      name:"Combo",
      des:"All in one",
      price:500,
            image:p6,
            quantity:1,

    },
    {
      id:7,
      name:"Perfect shirt",
      des:"Finding perfect products",
      price:350,
            image:p7,
            quantity:1,

    },
    {
      id:8,
      name:"Formal shoe",
      des:"Finding perfect shoes",
      price:750,
            image:p8,
            quantity:1,

    },
    {
      id:9,
      name:"Stlying suit",
      des:"Formal type",
      price:650,
            image:p9,
            quantity:1,

    },
  ]

  const CartProducts = useSelector((state)=>state.cart.cartItems)
  const dispatch = useDispatch();
  const addCart =(item)=>{
    dispatch(addtocart(item));
    
  };

  const deleteCart = (item)=>{
    dispatch(deleteFromCart(item));

  }
  return (
    
    <>
    <section className='table'>
      <div className='container'>
 <div class="mt-5 row text-center" style={{padding:"10px",marginLeft:"10px"}}>
  <div class="col-lg-4 border border-dark" style={{width:"250px"}}>
<h6 className='mt-2' style={{color:"black"}}>CATEGORIES</h6>
 
 <table class="table table-border mt-5 g-5" style={{height:"100px"}}>
 <tr>
      <th scope="row"style={{color:"#948EEE" ,fontSize:"18px"}}>Men</th>
      <td>(2,220)</td>
      </tr>

      <tr>
      <th scope="row"style={{color:"#948EEE",fontSize:"18px"}}>Women</th>
      <td>(2,550)</td>
      </tr>

      <tr>
      <th scope="row"style={{color:"#948EEE", fontSize:"18px"}}>Children</th>
      <td>(2,124)</td>
      </tr>
</table>
<hr></hr>
<br></br>
<div className='range'>
  <h5 className='fs-6'>FILTER BY PRICE</h5>
  
<input type="range" class="form-range" min="" max="" id="customRange2" style={{backgroundColor:"#7971EA"}}></input>

<label for="customRange2" class="form-label">$75 to $300</label>
</div>
<hr></hr>
<br></br>

<div className='size'>
<h4 className='fs-5'>SIZE</h4>
<div class="form-check mt-3 fs-5">
  <input class="form-check-input" type="checkbox"  name="checkDefault" value="" id="checkDefault1"/>
  <label class="form-check-label" for="checkDefault1" >
    Small (2,319)
  </label>
</div>
<div class="form-check fs-5">
  <input class="form-check-input" type="checkbox" name="checkDefault" value="" id="checkDefault2"/>
  <label class="form-check-label" for="checkDefault2">
    Medium (1,282)
  </label>
</div>
<div class="form-check fs-5">
  <input class="form-check-input" type="checkbox" name="checkDefault" value="" id="checkDefault3"/>
  <label class="form-check-label" for="checkDefault3">
    Large (1,392)
  </label>
</div>
</div>
<hr></hr>

<div className='mt-5'>
  <h4 className='fs-5'>COLOR</h4>

  <div className='properties mt-4'style={{alignSelf:"center",gap:"15px"}}>

  <a href="#" class="d-flex color-item align-items-center">
                  <span class="bg-danger color d-inline-block rounded-circle mr-2"></span>
                   <span class="text-black ">Red(2,429)</span>
                </a>
                <a href="#" class="d-flex color-item align-items-center">
                  <span class="bg-success color d-inline-block rounded-circle mr-2"></span>
                   <span class="text-black">Green(2,429)</span>
                </a>
                <a href="#" class="d-flex color-item align-items-center">
                  <span class="bg-info color d-inline-block rounded-circle mr-2"></span>
                   <span class="text-black">Blue(2,429)</span>
                </a>
                <a href="#" class="d-flex color-item align-items-center">
                  <span class="bg-primary color d-inline-block rounded-circle mr-2 "></span>
                   <span class="text-black">Purple(2,429)</span>
                </a>
                
                </div>

                <hr></hr>
                
</div>
</div>

  <div class="col-lg-8">
    <h5 className='text-start'>Shop all</h5>
    <div className='row'>
            {
              prod.map((item)=>(
                <div className='col-lg-4 pt-5' key={item.id}>
                  <div className='card' style={{height:"100%"}}>
                    <img className="image2" style={{height:"95%"}} src={item.image} alt=''/>
                    <p className='fs-3' style={{color:"#7971EA"}}>{item.name}</p>
                    <p className='fs-5'>{item.des}</p>
                    <p className='fs-4' style={{color:"#7971EA"}}>₹{item.price}</p>
                    {
                      CartProducts.find(cartItems => cartItems.id === item.id)?
                      <button className='btn btn-danger mb-2 mx-4' onClick={()=>deleteCart(item)}>Remove<svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button>:
                      <button className=' btn btn-success mb-2 mx-4' onClick={()=>addCart(item)}>Add to cart<svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg></button>
                    }
                    </div>
                    
                </div>
               
      
                
              ))
}

          </div>
          
        </div>
     
  
  </div>
  
</div>
 


 
</section>

<br></br>
<br></br>
<br></br>

 



<section className='collection'>
  <div className='container mt-5'>
    <center>
    <h3 className='bg-info'>CATEGORIES</h3>
    </center>
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



<br></br>
<br></br>
<br></br>
<br></br>

<hr></hr>


</>
   
)
}


export default Shop