import React from 'react'
import {ServicePropData} from './ServicePropData'
import './ServiceProperty.css'

const ServiceProperty = () => {
  return (
    <div className='mt-5'>
      {/* <h3>Pourquoi nous choisir?</h3>  */}
      <h2 style={{color:"#001a33"}}>Découvrez nos principaux <span className='fw-bolder'> avantages</span></h2> 
      <h5  className='text-primary  mb-5'>Pourquoi faire appel à notre agence web ?</h5> 
      
      <div className=' row  justify-content-between m-5 p-5'>
        
{
ServicePropData.map((program)=>(
  <div id='serv' className=' col-sm-4 col-lg-3 mt-3'>
  <h5 className='bold'>{program.heading}</h5>
  <p className='text-grey'>{program.text}</p>
  <ul>
    {/* for (let index = 0; index < program.arrayl.length; index++) { 
        {program.arrayl.map((pro)=>(
          <li> {pro}</li>
        ))}
   */}
    
  </ul>
  </div>
))
}

      </div>
    </div>
  )
}

export default ServiceProperty