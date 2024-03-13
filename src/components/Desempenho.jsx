import './Desempenho.css'
import Progress from 'react-circle-progress-bar'

import { useState } from 'react';

function Desempenho() {

    window.addEventListener('scroll', function scroll(){
        const scrollY = window.pageYOffset;
        const scrollDesempenho = document.getElementById('DESEMPENHO').offsetTop

        //console.log(scrollY)

        if(scrollY + 300 > scrollDesempenho){
            setDesempenhoProgress(97)
            setAcessibilidadeProgress(100)
            setPraticasProgress(100)
            setSEOProgress(100)
        } else{
            return
        }
    })

    const [desempenhoProgress, setDesempenhoProgress] = useState()
    const [acessibilidadeProgress, setAcessibilidadeProgress] = useState()
    const [praticasProgress, setPraticasProgress] = useState()
    const [SEOProgress, setSEOProgress] = useState()


  return (
    <div id='DESEMPENHO' className='Desempenho container2'>
        <div className='flexContainer'>
            <div className='section1'>
                <div className='text'>
                    <h2>Seu site com alta performace</h2>
                    <p>Sites aprovados pelo <a href="https://pagespeed.web.dev/analysis/https-tiagoviniciusdev-github-io-idealwebsites/gro1ylym9j?form_factor=desktop" target='_blank'><span>Google PageSpeed</span></a></p>
                    <p>Usamos as melhores tecnicas e ferramentas para</p>
                    <p>construir sites rápidos e responsivos</p>
                </div>
                <div className='valoresDesempenho'>     
                    <div className='valoresContainer'>
                        <Progress className="circle" progress={desempenhoProgress} strokeWidth={8} ballStrokeWidth={0} reduction={0} transitionDuration={2} subtitle="Desempenho"/>
                        <Progress className="circle" progress={acessibilidadeProgress} strokeWidth={8} ballStrokeWidth={0} reduction={0} transitionDuration={2} subtitle="Acessibilidade"/>
                    </div>
                    <div className='valoresContainer'>
                        <Progress className="circle" progress={praticasProgress} strokeWidth={8} ballStrokeWidth={0} reduction={0} transitionDuration={2} subtitle="Boas Práticas"/>
                        <Progress className="circle" progress={SEOProgress} strokeWidth={8} ballStrokeWidth={0} reduction={0} transitionDuration={2} subtitle="SEO"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Desempenho