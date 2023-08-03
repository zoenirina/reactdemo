import React from 'react'

const ServiceList = () => {
  return (
    <div>

    <div>
      <h3>Pourquoi nous choisir?</h3> 
      <div className='row'>
        
{ServiceListData.map((program)=>(
  <div className='col col-lg-3 col-sm-4 m-1 bg-light shadow p-2'>
  <h5>{program.heading}</h5>
  <p>{program.text}</p>
  <ul>
    {/* for (let index = 0; index < program.arrayl.length; index++) { */}
        {program.arrayl.map((pro)=>(
          <li> {pro}</li>
        ))}
    {/* } */}
    
  </ul>
  </div>
))
}

      </div>
    </div>

    </div>
  )
}

export default ServiceList