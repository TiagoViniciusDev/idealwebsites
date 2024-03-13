import './Header.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


import { useState } from 'react';

//Context
import { useContext } from 'react';
import { Context } from '../Context/context';

function Header() {

  const {goHome, goServices, goContact} = useContext(Context)

  const [showMobile, setShowMobile] = useState(false)

  function toggleMenuMobile(){
    setShowMobile(!showMobile)
  }

  return (
    <div className='Header'>
        <div className='container'>
            <div className='logo'>
              <div className='logoImg'></div>
              <h2>Ideal<span>websites</span></h2>
            </div>
            <nav>
              <p onClick={() => {goHome()}}>Home</p>
              <p onClick={() => {goServices()}}>Serviços</p>
              <p onClick={() => {goContact()}}>Contato</p>
            </nav>
            <a href='https://api.whatsapp.com/send?phone=5586995652410' target='_blank' className='contact' title='whatsapp'>
              <FaWhatsapp />
              <h3>(86) 99565-2410</h3>
            </a>
            <div className='mobile'>
              <div className='showNav'>
                <IoMenu style={showMobile ? {"display": "none"} : {"display": "block"}}  onClick={() => {toggleMenuMobile()}}/>
                <IoClose style={showMobile ? {"display": "block"} : {"display": "none"}}  onClick={() => {setShowMobile(false)}}/>
              </div>
              <div className='mobileContainer' style={showMobile ? {"display": "block"} : {"opacity": "0", "display": "none"}}>
                <div className='navMobile'>
                  <nav onClick={() => {setShowMobile(false)}}>
                    <p onClick={() => {goHome()}}>Home</p>
                    <p onClick={() => {goServices()}}>Serviços</p>
                    <p onClick={() => {goContact()}}>Contato</p>
                  </nav>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header