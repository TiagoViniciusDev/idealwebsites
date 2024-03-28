import './Header.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


import { useState, useEffect } from 'react';

//Context
import { useContext } from 'react';
import { Context } from '../Context/context';

function Header() {

  const {goHome, goServices, goContact} = useContext(Context)

  const [showMobile, setShowMobile] = useState(false)


  //Sistema Janela Modal
  useEffect(() => {
      document.getElementById('NavMobile').addEventListener('click', function(){
          setShowMobile(false)
      })

      document.getElementById('ShowNav').addEventListener('click', function(e){
          setShowMobile(true)
          e.stopPropagation()
      })

      window.addEventListener('click', function(){
          setShowMobile(false)
      })
  },[])

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
              <div className='showNav' id='ShowNav'>
                <IoMenu onClick={() => {setShowMobile(true)}}/>
              </div>
              <div className='mobileContainer' style={showMobile ? {"display": "flex"} : {"opacity": "0", "display": "none"}}>
                <div className='closeButton' onClick={() => {setShowMobile(false)}}>
                  <IoClose />
                </div>
                <div className='navMobile' id='NavMobile'>
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