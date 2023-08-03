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
    <div className='row'> 
      {/* <ServiceCard titre='POS UNIMAG' prix='2950'/>   */}
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
      <ServiceCard titre={data.titre} prix={data.prix} liste={data.liste} footer={data.footer}/>
    </div>
  )
}

export default WhyUs