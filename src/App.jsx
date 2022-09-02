import './App.css'
import {Navbar, Hero, Help, Footer, FusionDesign, Started} from './Components'

function App() {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <Hero/>
      <Help/>
      <FusionDesign/>
      <Started/>
      <Footer/>
    </div>
  )
}

export default App
