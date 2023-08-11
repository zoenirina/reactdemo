import React from 'react'
import "./Card2.css"

const data =
    {
    liste:[  "Jusqu'à 5 pages + page de contact",
    "Hébergement et nom du domaine offert",
    "Adresse de messagerie limitées",
    "Affichage responsive"],

}

const Card1 = ({titre,titrebold,text,list,prix}) => {
  return (
    <div style={{backgroundColor:"#001a33", color:"#e6f2ff"}} className='col-sm-10 col-md-5 m-2 shadow-sm-1 shadow-sm'>
        <h3 style={{ color:"#e67300"}} className=' mt-3'>{titre}<span>{titrebold}</span></h3>
        <hr/>
        <span>{text}</span>
        <div className='d-flex cadre1'>
        <ul style={{textAlign: "start",textDecoration:"none"}}>
         {/* {data.liste.map((data)=>
                <li style={{listStyle:"none"}}>{data}</li>
                )} */}
                  {list.map((data)=>
                <li style={{listStyle:"none"}}>{data}</li>
                )}
                <br/>
         
        </ul>
       
        </div>
        <span>{prix}</span>
            {/* <p className='pl-5' style={{textAlign: "start"}}>A seulement: {prix} DH HT*</p> */}
        <button className='btn btn-green w-100 mb-1'>DECOUVRIR</button>
        <button className='btn btn-outline-green w-100 mb-5'>CONTACTEZ-NOUS</button>
        
    </div>
  )
}

export default Card1