
//reaproveiramento da estrutura
import { Outlet } from 'react-router-dom'

//navbar

import Navbar from '../../components/Navbar'

import Footer from '../../components/Footer'


//estrutura da pagina

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
