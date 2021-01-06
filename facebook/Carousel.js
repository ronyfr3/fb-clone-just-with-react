import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import data from './data'
import './Carousel.css'

function Image() {
    const [item,setItem] =useState(data)
    console.log(item)
    console.log(setItem)
    return (
        <>
         <Swiper>
         <SwiperSlide>
             <div className='carouselwrapper'>
                 {
                     item.map((item,i)=>{
                         const {img,name,text} =item
                         return(
                             
                                <div key={i} className='carousel'>
                                    <img src={img} alt={name}/>
                                    <p>{name}</p>
                                    <span>{text}</span>
                                </div>
                         )
                     })
                 }
             </div>
             </SwiperSlide>
         </Swiper>
           <div className='carouselunderline'></div>
         </>
    )
}

export default Image
