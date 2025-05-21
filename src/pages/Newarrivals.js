import React from 'react'
import p1 from '../images/cloth1.webp'
import p2 from '../images/cloth2.webp'
import p3 from '../images/cloth3.webp'
import p4 from '../images/shoe2.webp'

const Newarrivals = () => {

  const prod = [
    {
      id:1,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
      image:p1
    },
    {
      id:2,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
      image:p2

    },
    {
      id:3,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
            image:p3

    },
    {
      id:4,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
            image:p4

    },
    {
      id:5,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
            image:"https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"

    },

    {
      id:6,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
            image:"https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"

    },
    {
      id:7,
      name:"Tank top",
      des:"Finding perfect products",
      price:50,
            image:"https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"

    },
  ]
  return (
    <div>
      <section>
        <div className='container'>
          <div className='row'>
            {
              prod.map((item)=>(
                <div className='col-lg-6' key={item.id}>
                  <div className='card'>
                    <img src={item.image} alt=''/>
                    <p>{item.name}</p>
                    <p>{item.des}</p>
                    <p>{item.price}</p>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newarrivals