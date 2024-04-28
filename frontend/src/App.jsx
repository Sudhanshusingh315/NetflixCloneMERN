import { Route, Routes } from 'react-router-dom'
import './App.css'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Netflix/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App