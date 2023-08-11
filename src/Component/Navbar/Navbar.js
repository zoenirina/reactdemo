import React from 'react'
import './Navbar.css'
import facebook from '../../Component/asset/facebook.png'
import twiter from '../../Component/asset/twiter.png'
import linkdIn from '../../Component/asset/linkdIn.png'
import youtube from '../../Component/asset/youtube.png'

const Navbar = () => {
  return (
    <div className="navba shadow">
        <div className="flex" style={{height:"24px"}}>
         <div className="icone-share">

            <a href=""><img className='ico' src={facebook}/></a>
            <a href=""><img className='ico' src={twiter}/></a>
            <a href=""><img className='ico' src={linkdIn}/></a>
            <a href=""><img className='ico' src={youtube}/></a>
            <p  className="contact pt-3">DES QUESTIONS? APPELER-NOUS:06 74 89 20/ 07 71 50 84 82</p> 
         </div>
         
         </div>
         <hr/>
         <div className="navbar">
            <h2 style={{paddingLeft:"20px"}} className="Title fw-bold">Titre du Site</h2>
            <button className="icon-menu">menu</button>
        </div>
        {/* <div id="Left" class="animTest w3-animate-left">Animation is Fun!</div>     */}

    </div>
   

  )
}

export default Navbar