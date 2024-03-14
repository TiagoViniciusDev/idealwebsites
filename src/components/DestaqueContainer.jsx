import { useEffect } from 'react'
import './DestaqueContainer.css'

//Context
import { useContext } from 'react';
import { Context } from '../Context/context';

function DestaqueContainer() {

  const {setScrollYServices} = useContext(Context)
  
  useEffect(() => {
    const scrollY = document.getElementById('DESTAQUECONTAINER').offsetTop
    setScrollYServices(scrollY)
  },[])

  return (
    <div className='DestaqueContainer' id='DESTAQUECONTAINER'>
        <h2>Por que nós contratar?</h2>
        <div className='container2'>
            <div className='slide'>
                <div className='img img1'></div>
                <h3>Preços</h3>
                <h3>acessíveis</h3>
                <p>Sites com preços acessíveis. Custo beneficio garantido</p>
            </div>
            <div className='slide'>
                <div className='img img2'></div>
                <h3>Confiabiliade</h3>
                <h3>e segurança</h3>
                <p>Pague só quando seu site estiver pronto</p>
            </div>
            <div className='slide'>
                <div className='img img3'></div>
                <h3>Acompanhamento</h3>
                <h3>personalizado</h3>
                <p>Deixaremos seu site exatamente como você deseja</p>
            </div>
            <div className='slide'>
                <div className='img img4'></div>
                <h3>Experiência</h3>
                <h3>profissional</h3>
                <p>+100 projetos realizados. Competência para realizar um bom trabalho</p>
            </div>
        </div>
    </div>
  )
}

export default DestaqueContainer