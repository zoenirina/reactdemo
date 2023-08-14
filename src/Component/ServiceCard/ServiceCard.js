import React from 'react'
import image1 from '../../Component/asset/Image1.png'
import './ServiceCard.css'

const ServiceCard = ({titre,prix,liste,footer}) => {
  return (
    <div className='rounded col-sm-5 m-2 shadow-sm-1 shadow-sm border'>
        <h3 className='text-primary m-2 '>{titre}</h3>
        <hr/>
        <div className='d-flex cadre1'>
        <ul style={{textAlign: "start",textDecoration:"none"}}>
                {liste.map((data)=>
                <li style={{listStyle:"none"}}>{data}</li>
                )}
                <br/>
          <p className='pl-5' style={{textAlign: "start"}}>A seulement: <h4 style={{color: "#ff8000"}}>{prix}  DH HT*</h4></p>       
        </ul>
        <img className='h-50'  style={{marginLeft:"80px",marginTop:"50px"}} src={image1}/>
        </div>
            {/* <p className='pl-5' style={{textAlign: "start"}}>A seulement: {prix} DH HT*</p> */}
        <button style={{backgroundColor:"#001a33"}} className='btn btn-blue  text-white mb-5'>Decouvrir</button>
        
    </div>
  )
}

export default ServiceCard