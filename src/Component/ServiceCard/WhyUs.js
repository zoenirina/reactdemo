import React from 'react'
import ServiceCard from './ServiceCard'

const data =
    {
    titre:"POS UNIMAG",
    liste:["Gestion de stock","Gestion des clients","Gestion des produits","Historique des produit","Gestion des fournisseurs","Prévisualisation en image","Gestion des catégories","Caissiers illimités"],
    prix:"2950",
    footer:"POS GASTRO"
}
const WhyUs = () => {

  return (
    <div className='row m-5 justify-content-center'>
      <h2 style={{color:"#001a33"}}>Nos applications<span className='fw-bolder'> web adaptés</span></h2> 
      <h5  className='text-primary  mb-5'>Venez au plus proche de notre agence web</h5> 
      {/* <ServiceCard titre='POS UNIMAG' prix='2950'/>   */}
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
    </div>
  )
}

export default WhyUs