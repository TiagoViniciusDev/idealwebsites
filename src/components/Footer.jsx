import './Footer.css'

import { FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import { useEffect } from 'react';

//Context
import { useContext } from 'react';
import { Context } from '../Context/context';

function Footer() {

  const {setScrollYContact} = useContext(Context)
  
  useEffect(() => {
    const scrollY = document.getElementById('FOOTER').offsetTop
    setScrollYContact(scrollY)
  },[])

  return (
    <footer className='Footer container2' id='FOOTER'>
        <div className='contact1'>
          <div className='profile'>
            <div className='logo'></div>
            <div className='profileText'>
              <h2>Ideal<span>websites</span></h2>
              <p>Desenvolvimento de sites</p>
            </div>
          </div>
          <div className='email'>
            <p>Email para contato</p>
            <h3>contato.idealwebsites@gmail.com</h3>
          </div>
        </div>

        <div className='contact2'>
          <h2>Pronto para começarmos?</h2>
          <p>Entre agora em contato. Qualidade garantida por nossa equipe</p>
          <div className='contactIcons'>
            <a href='https://api.whatsapp.com/send?phone=5586995652410' target='_blank' title='whatsapp'><FaWhatsappSquare /></a>
            <a href="https://www.instagram.com/idealwebsites/" target='_blank' title='instagram'><FaInstagram /></a>
            <a href="mailto:contato.idealwebsites@gmail.com" target='_blank' title='email'><MdOutlineMailOutline /></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer