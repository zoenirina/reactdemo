import React from 'react'
import {Carousel} from 'react-bootstrap'
import  '../../Component/CarouselHome/animate.min.css'
import './Slide.css'

const Slide = () => {
  return (
    <div className='row'>
        <div className='mb-5 col-12 p-5 bg-orange text-white'>
        <h2>Votre solution sur mesure</h2>
        <p className='w-60 text-orange-l'>Booster votre business grâce à un E-commerce qui donne à vos produits davantage de visibilités et permet à vos internautes d'effectuer leurs achats en toute sécurité</p>
        <button id='bg-orange' className='btn bg-green bg-white m-1'>site web</button>
        <button className='btn bg-outline-green m-1'>application</button>
        </div>
        {/* <div className='col-6'>
        <h2>Votre solution sur mesure</h2>
        <p>Booster votre business grâce à un E-commerce qui donne à vos produits davantage de visibilités et permet à vos internautes d'effectuer leurs achats en toute sécurité</p>
        <button>site web</button>
        <button>application</button>
        </div> */}
<Carousel className='mt-5'>
<Carousel.Item>
<div className='row'>
<div className='col-6 animate__animated animate__fadeInRight' style={{animationDelay:"0.1s"}}>
        <h2>Votre solution sur mesure</h2>
        <p>Booster votre business grâce à un E-commerce qui donne à vos produits davantage de visibilités et permet à vos internautes d'effectuer leurs achats en toute sécurité</p>
        <button className='btn btn-outline-primary'>site web</button>
        <button className='btn btn-primary'>application</button>
</div>

<div className='col-5 shadow-md'>
        <h5>SITE WEB</h5>
        <h5>SITE VITRINE PROFESSIONNEL</h5>
        <h1>2950 HD HT</h1>
        <ul>
        <li>Jusqu'à 5 pages + pages de contact</li>
        <li>Hébergement et npm de domaine offert*</li>
        <li>Adresses de messagerie professionnelles</li>
        <li>Dernière norme de codage</li>
        <li>Affichage responsive</li>
        <li>Stockage SSD</li>
        </ul>
        
        <button className='btn btn-primary'>DECOUVRIR</button>
        </div>
        </div>
</Carousel.Item>
<Carousel.Item>
<div className='row'>
<div className='col-6 animate__animated animate__fadeInLeft' style={{animationDelay:"0.1s"}}>
        <h2>Votre solution sur mesure</h2>
        <p>Booster votre business grâce à un E-commerce qui donne à vos produits davantage de visibilités et permet à vos internautes d'effectuer leurs achats en toute sécurité</p>
        <button className='btn btn-outline-primary'>site web</button>
        <button className='btn btn-primary'>application</button>
</div>

<div className='col-5 shadow-md animate__animated animate__fadeInRight' style={{animationDelay:"0.5s"}}>
        <h5>SITE WEB</h5>
        <h5>SITE VITRINE PROFESSIONNEL</h5>
        <h1>2950 HD HT</h1>
        <ul>
        <li>Jusqu'à 5 pages + pages de contact</li>
        <li>Hébergement et npm de domaine offert*</li>
        <li>Adresses de messagerie professionnelles</li>
        <li>Dernière norme de codage</li>
        <li>Affichage responsive</li>
        <li>Stockage SSD</li>
        </ul>
        
        <button className='btn btn-primary'>DECOUVRIR</button>
        </div>
        </div>
</Carousel.Item>
</Carousel>
    </div>
  )
}

export default Slide