
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import '../styles/style.css'
import Loading from '../components/Loading/Loading'
import Login from '../components/Login/Login'
import Perfil from '../components/Perfil'




const AppRouter = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Loading/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<Perfil/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter