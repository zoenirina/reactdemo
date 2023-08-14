import React from 'react'
import {Carousel} from 'react-bootstrap'
import image1 from '../../Component/asset/image1.jpg'
import image02 from '../../Component/asset/image02.jpg'
import image01 from '../../Component/asset/image01.jpg'
import  './animate.min.css'
import  './CarouselHome.css'

const CarouselHome = () => {
  return (
    <div>
        
        <Carousel controls dark>
    
      <Carousel.Item style={{height:"550px"}}>
       <div className='demo'>
       <img className='w-100' src={image1}/>
       {/* <p style={{position:"absolute",top:"20px",left:"30px"}}>Lorem bgfxbfgbnfnghngfh ghn,ghn,g</p> */}
       </div>
        <Carousel.Caption style={{position:"absolute",top:"40px",left:"12%",textAlign:"start" }}>
        <div className='bac'>
          <h3 className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>Application Pos gastro</h3>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>L'assistance qu'il vous faut pour mieux gérer votre restaurant.</p>
          <ul className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.8s"}}>
            <li>Gestion des clients et des fournisseurs</li>
            <li>Question des tables et des cuisines</li>
            <li>Rôles de serveur et de chefs</li>
            <li>Réçu et facture personnalisés</li>
          </ul>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"1s"}}>Abonnement annuel à seulement : <br/> <h3>2950 DH HT</h3></p>
        <span  className=' animate__animated animate__fadeInUpBig' style={{animationDelay:"1s"}}> 
        <button style={{backgroundColor: "#509650",color: "white"}} className="btn btn-orang m-1">Plus d'option</button>
         <button style={{borderColor: "#509650",color: "#509650"}} className="btn btn-outline-orang m-1">Contactez-nous</button>
         </span>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"550px"}}>
      <div className='demo'>
        <img className='w-100' src={image02}/>
        </div>
        <Carousel.Caption style={{position:"absolute",top:"40px",left:"12%",textAlign:"start" }}>
        <div className='bac'>
          <h3 className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>Application Pos gastro</h3>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>L'assistance qu'il vous faut pour mieux gérer votre restaurant.</p>
          <ul className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.8s"}}>
            <li>Gestion des clients et des fournisseurs</li>
            <li>Question des tables et des cuisines</li>
            <li>Rôles de serveur et de chefs</li>
            <li>Réçu et facture personnalisés</li>
          </ul>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"1s"}}>Abonnement annuel à seulement : <br/> <h3>2950 DH HT</h3></p>
        <span  className=' animate__animated animate__fadeInUpBig' style={{animationDelay:"1s"}}> 
        <button style={{backgroundColor: "#509650",color: "white"}} className="btn btn-orang m-1">Plus d'option</button>
         <button style={{borderColor: "#509650",color: "#509650"}} className="btn btn-outline-orang m-1">Contactez-nous</button>
         </span>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"550px"}}>
      <div className='demo'>
      <img className='w-100' src={image01}/>
      </div>
      <Carousel.Caption style={{position:"absolute",top:"40px",left:"12%",textAlign:"start" }}>
        <div className='bac'>
          <h3 className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>Application Pos gastro</h3>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>L'assistance qu'il vous faut pour mieux gérer votre restaurant.</p>
          <ul className=' animate__animated animate__fadeInRight' style={{animationDelay:"0.8s"}}>
            <li>Gestion des clients et des fournisseurs</li>
            <li>Question des tables et des cuisines</li>
            <li>Rôles de serveur et de chefs</li>
            <li>Réçu et facture personnalisés</li>
          </ul>
          <p  className=' animate__animated animate__fadeInRight' style={{animationDelay:"1s"}}>Abonnement annuel à seulement : <br/> <h3>2950 DH HT</h3></p>
        <span  className=' animate__animated animate__fadeInUpBig' style={{animationDelay:"1s"}}> 
        <button style={{backgroundColor: "#509650",color: "white"}} className="btn m-1">Plus d'option</button>
         <button style={{borderColor: "#509650",color: "#509650"}} className="btn btn-outline-orang m-1">Contactez-nous</button>
         </span>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CarouselHome