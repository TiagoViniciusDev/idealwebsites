import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sobre from './components/Sobre'
import DestaqueContainer from './components/DestaqueContainer'
import Desempenho from './components/Desempenho'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Sobre />
      <DestaqueContainer />
      <Desempenho />
      <Footer />
    </div>
  )
}

export default App
