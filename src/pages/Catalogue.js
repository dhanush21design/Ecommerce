// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../tool/Cartslice';
import './cart.css'



const Catalogue = () => {
  const Cartproducts = useSelector((state)=>state.cart.cartItems);
const dispatch = useDispatch();

const deleteCart = (item)=>{
  dispatch(deleteFromCart(item));
  
};

// const incrementCart = (id,quantity)=>{
//   dispatch(updateQuantity({id,quantity : quantity+1}))
// };

// const decrementCart = (id,quantity)=>{
//   if(quantity>1){
//   dispatch(updateQuantity({id,quantity : quantity+1}))
//   }
// };


// const totalQuantity = Cartproducts.reduce((total,item)=>total+item.quantity,0);
// const totalAmount = Cartproducts.reduce((total,items)=>total+items.price*item.quantity,0);
// const totalPrice = totalAmount.toFixed(2)
  return (
    <>
    <div>
      <section className='cart1'>
        <div className='container'>
          <div className='row'>
            {
              Cartproducts.map((item)=>(
                <div className='col-lg-4' key={item.id}>
                  <div className='card'>
                    <img src={item.image} alt='danush'></img>
                    <h1 className='text-dark'>{item.name}</h1>
                    <p> ₹{item.price} </p>
                    <p>{item.des}</p>
                    
                    <button className='fs-4 btn btn-danger text-center w-50 ' onClick={()=>deleteCart(item)}>Delete
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button>
                  </div>
            </div>
              ))
            }
            <div className='col-lg-6'>

            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Catalogue