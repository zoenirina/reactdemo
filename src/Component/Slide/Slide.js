import React, { useState } from 'react'
import {Carousel} from 'react-bootstrap'
import  '../../Component/CarouselHome/animate.min.css'
import './Slide.css'
import {motion} from 'framer-motion'

const Slide = () => {
        const datas=[
{
        left:[
                "Votre solution sur mesure",
                "Booster votre business grâce à un E-commerce qui donne à vos produits davantage de visibilités et permet à vos internautes d'effectuer leurs achats en toute sécurité",
                "'btn bg-green m-1'",
                "'btn bg-outline-green m-1'",
                "'col-6 animate__animated animate__fadeInLeft'",
                "'0.2s'"
        ],
        right: {
                titre:"SITE WEB",
                sous_titre:"SITE VITRINE PROFESSIONNEL",
                prix:"2950 HD HT",
                liste:["Jusqu'à 5 pages + pages de contact",
                "Hébergement et npm de domaine offert*",
                "Adresses de messagerie professionnelles",
                "Dernière norme de codage",
                "Affichage responsive",
                "Stockage SSD"]
        }
},{
        left:[
                "Votre application sur mesure",
                "Booster votre business grâce à un E-commerce qui donne à vos produits davantage de visibilités et permet à vos internautes d'effectuer leurs achats en toute sécurité",
                "'btn bg-outline-green m-1'",
                "'btn bg-green m-1'",
                "'col-6 animate__animated animate__fadeInLeft'",
                "'0.4s'"
        ],
        right: {
                titre:"SITE WEB",
                sous_titre:"SITE VITRINE PROFESSIONNEL",
                prix:"2950 HD HT",
                liste:["Jusqu'à 6 pages + pages de contact",
                "Hébergement et npm de domaine offert*",
                "Adresses de messagerie professionnelles",
                "Dernière norme de codage",
                "Affichage responsive",
                "Stockage SSD"]
        }     
}
];
        const [selected,setSelected]= useState(0);
        const datasLen =datas.length;
        const transition= {duration:1,type:'spring'};

  return (
    <div className='row'>
        <motion.div
        // animate={{ rotate: 180 }}
        // transition={{
        //   repeat: 1,
        //   repeatType: "reverse",duration: 2}}
initial={{left:'0px'}}
whileInView={{left:'10px'}}

        animate={{  x: 200  }}
       transition={{ type: 'spring' }}
       style={{position:"relative",textAlign:"start"}}>
                <button>coucou</button>
        </motion.div>

        <div className='mb-5 col-12 p-5 bg-orange text-white'>
        <h2>{datas[selected].left[0]}</h2>
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
{/* <Carousel className='mt-5'>
<Carousel.Item> */}

{/* <div className='row'>
<div className='col-6 animate__animated animate__fadeInLeft' style={{animationDelay:datas[selected].left[5]}}>
        <h2>{datas[selected].left[0]}</h2>
        <p>{datas[selected].left[1]}</p>
        <button onClick={()=>{
                selected === 0 ? setSelected(datasLen-1) : setSelected((prev)=>prev-1);
        }} className={datas[selected].left[2]}>site web</button>
        <button onClick={()=>{
                selected === datasLen-1 ? setSelected(0) : setSelected((prev)=>prev+1);
        }}  className={datas[selected].left[3]}>application</button>
</div>
<div className='col-5 border p-2 shadow-md animate__animated animate__fadeInRight'>
        <h5>{datas[selected].right.titre}</h5>
        <h5>{datas[selected].right.sous_titre}</h5>
        <h1>{datas[selected].right.prix}</h1>
        <ul style={{textAlign:"start"}}>
        {datas[selected].right.liste.map((elem)=>
        <li>{elem}</li>
        )}
        {/* <li>Jusqu'à 5 pages + pages de contact</li>
        <li>Hébergement et npm de domaine offert*</li>
        <li>Adresses de messagerie professionnelles</li>
        <li>Dernière norme de codage</li>
        <li>Affichage responsive</li>
        <li>Stockage SSD</li> */}
        
        {/* </ul>
        
        <button className='btn btn-primary'>DECOUVRIR</button>
        </div>
        </div> */} 
<div className='col-6 animate__animated animate__fadeInLeft' style={{animationDelay:datas[selected].left[5]}}>
        
        <motion.p 
key={selected}
initial={{opacity:0, x:-100}}
animate={{opacity:1,x:0}}
exit={{opacity:0, x:100}}
transition={transition}
        >
           <h2>{datas[selected].left[0]}</h2>     
                {datas[selected].left[1]}
        </motion.p>
        <button onClick={()=>{
                setSelected(0);
                //selected === 0 ? setSelected(datasLen-1) : setSelected((prev)=>prev-1);
        }} className={datas[selected].left[2]}>site web</button>
        <button onClick={()=>{
                setSelected(1);
              //  selected === datasLen-1 ? setSelected(0) : setSelected((prev)=>prev+1);
        }}  className={datas[selected].left[3]}>application</button>
</div>
<motion.div
key={selected}
initial={{opacity:0, x:50}}
animate={{opacity:1,x:0}}
exit={{opacity:0, x:-50}}
transition={transition}
 className='col-5 border p-2 shadow-md animate__animated animate__fadeInRight'>
        <h5>{datas[selected].right.titre}</h5>
        <h5>{datas[selected].right.sous_titre}</h5>
        <h1>{datas[selected].right.prix}</h1>
        <ul style={{textAlign:"start"}}>
        {datas[selected].right.liste.map((elem)=>
        <li>{elem}</li>
        )}
        </ul>
        <button className='btn btn-primary'>DECOUVRIR</button>
        </motion.div>
        </div>


  )
}

export default Slide