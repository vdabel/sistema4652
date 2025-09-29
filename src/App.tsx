import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import Inicio from './pages/Inicio'
import Proveedores from './pages/Proveedores'
import Inversiones from './pages/Inversiones'
import Perfil from './pages/Perfil'
import Configuracion from './pages/Configuracion'
import Empleados from './pages/Empleados'
import Tienda from './pages/Tienda'

function App() {

  return (
    <>

      <BrowserRouter>
        <MainHeader />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/proveedores' element={<Proveedores />} />
          <Route path='/inversiones' element={<Inversiones />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/configuracion' element={<Configuracion />} />
          <Route path='/empleados' element={<Empleados />} />
          <Route path='/tienda' element={<Tienda />} />

          <Route path='*' element={<h1 className='text-3xl text-center py-20'>404 - Página no encontrada</h1>} />
        </Routes>






        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
