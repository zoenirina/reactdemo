import React from 'react'
import image1 from '../../Component/asset/Image1.png'
import './ServiceCard.css'

const ServiceCard = ({titre,prix,liste,footer}) => {
  return (
    <div className='rounded col-sm-5 m-2 bg-light shadow-sm-1'>

        <h3 className='text-primary m-2'>{titre}</h3>
        <hr/>
        <div className='d-flex cadre1'>
        <ul style={{textAlign: "start",textDecoration:"none"}}>
                {liste.map((data)=>
                <li style={{listStyle:"none"}}>{data}</li>
                )}
        </ul>
        <img className='h-50' src={image1}/>
        </div>
            <span>A seulement: {prix} DH HT*</span>
        <button className='btn btn-primary'>Decouvrir</button>
        <h3 className='text-primary'>{footer}</h3>
    </div>
  )
}

export default ServiceCard