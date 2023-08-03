import React from 'react'
import {Carousel} from 'react-bootstrap'
import image1 from '../../Component/asset/image1.jpg'
import image2 from '../../Component/asset/image2.jpg'
import image3 from '../../Component/asset/image3.jpg'
import  './animate.min.css'

const CarouselHome = () => {
  return (
    <div>
        
        <Carousel controls dark>
    
      <Carousel.Item style={{height:"450px"}}>
       <div className='demo'>
       <img className='w-100' src={image1}/>
       <p style={{position:"absolute",top:"20px",left:"30px"}}>Lorem bgfxbfgbnfnghngfh ghn,ghn,g</p>
       </div>
        <Carousel.Caption style={{position:"absolute",top:"20px",left:"30px",textAlign:"start" }}>
        <div className='text-black bac'>
          <h3 className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>First slide label</h3>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"450px"}}>
      <div className='demo'>
        <img className='w-100' src={image2}/>
        </div>
        <Carousel.Caption style={{position:"absolute",top:"20px",left:"30px"}}>
        <div className='text-black'>
          <h3  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>Second slide label</h3>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"450px"}}>
      <div className='demo'>
      <img className='w-100' src={image3}/>
      </div>
        <Carousel.Caption style={{position:"absolute",top:"20px",left:"30px"}}>
        <div className='text-black'>
          <h3  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>Third slide label</h3>
          <p className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CarouselHome