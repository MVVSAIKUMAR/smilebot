import React from 'react'
import {porducts} from '../component/Json'
import Card from '../component/Card'
import '../component/css/Card.css'
const Homes = () => {
  return (
    <div>
      
      <section className='cards__container'>{
           porducts.details.map((v)=>{
                return(
                    <div>
                <Card name = {v.name} 
                    Img ={v.imageURL}
                 price = {v.price} />
                 </div>
                )
            })
        }
        </section>
    </div>
  )
}

export default Homes