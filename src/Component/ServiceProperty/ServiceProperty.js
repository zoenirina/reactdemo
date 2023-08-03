import React from 'react'
import {ServicePropData} from './ServicePropData'

const ServiceProperty = () => {
  return (
    <div>
      <h3>Pourquoi nous choisir?</h3> 
      <div className=' row  justify-content-between m-5 p-5'>
        
{ServicePropData.map((program)=>(
  <div id='serv' className=' col-sm-4 col-lg-2 m-1'>
  <h5>{program.heading}</h5>
  <p>{program.text}</p>
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