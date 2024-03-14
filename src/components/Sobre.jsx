import './Sobre.css'
import { FaWhatsappSquare } from "react-icons/fa";

function Sobre() {
  return (
    <section className='Sobre'>
        <div className='container2'>
            <div className='lineTitle'>
                <h2>Idealwebsites</h2>
                <div className='line'></div>
            </div>
            <p>Destaque-se online com um site profissional e atraente! Nossa equipe especializada em criação de sites está pronta para trazer sua visão à vida. Aumente sua presença digital e conquiste mais clientes. Entre em contato conosco hoje e comece a sua jornada rumo ao sucesso online!</p>
            <a href='https://api.whatsapp.com/send?phone=5586995652410' target='_blank' className='buttonStyle'>
              <FaWhatsappSquare />
              <p>Fale conosco via whatsapp</p>
            </a>
        </div>
    </section>
  )
}

export default Sobre