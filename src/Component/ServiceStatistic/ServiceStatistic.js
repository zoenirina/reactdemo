import React from 'react'
import './ServiceStatistic.css'

const ServiceStatistic = () => {
  return (
    <div className='bg-img mt-5 '>
    <div className='bg-opaque w-100 p-5'>
        <h3 className='text-green'>L'agence CREAWEB en chiffre</h3>
        <h5 className='text-light'>Venez au plus proche de notre agence web</h5>
        
        <div className='row justify-content-center'>  
        <div className='col-sm-3 m-5'> 
            <img src='' />
            <h5 className='text-primary'>Nos clients satisfaits</h5>
            <p className='text-light'>Nous comptons plus de 96% de clients comblés</p>
        </div> 
        <div className='col-sm-3 m-5'>  
            <img src='' />
            <h5 className='text-primary'>Tasses de cafés</h5>
            <p className='text-light'>Pour nous satisfaire nous avons aspiré 790 tasses de café</p>

        </div> 
        <div className='col-sm-3 m-5'>  
            <img src='' />
            <h5 className='text-primary'>Nos clients satisfaits</h5>
            <p className='text-light'>Nous comptons plus de 96% de clients comblés</p>
        
        </div> 
        <div className='col-sm-3 m-5'>  
            <img src='' />
            <h5 className='text-primary'>Nos clients satisfaits</h5>
            <p className='text-light'>Nous comptons plus de 96% de clients comblés</p>
        
        </div> 
        </div>  
        </div>
    </div>
  )
}

export default ServiceStatistic