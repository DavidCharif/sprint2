import React, { useState } from 'react'
import { LoginStyled } from '../../styles/style'
import logoPurple from '../../guideApp/images/logoContainerPurple.png'
import {AiOutlineGoogle} from 'react-icons/ai'
import { Navigate } from 'react-router-dom'


const Login = () => {
  const [correo, setCorreo] = useState('')

  const handleChange = ({target}) => {
    const data = target.value
    console.log(data);
    setCorreo((correo) => correo = data)
  }
  return (
    <LoginStyled>
      <img src={logoPurple} alt='logo'></img>
      <h1>Iniciar sesión</h1>
      <div className='button'> <AiOutlineGoogle className='iconGoogleLogin'/> <p> Continuar con Google</p></div>
      <div className='correoElectronico'><p>Correo electrónico</p></div>
      <input className='inputText' value={correo} onChange={handleChange} type='text' placeholder='Ingrese su correo electrónico'></input>
      <div className='forgottenPassword'><a href={<Navigate to={'/'}/>} >¿Se te olvidó tu contraseña?</a></div>
      <div className='createAccount'><p>¿Aún no tienes cuenta?</p><a href={<Navigate to={'/'}/>}>Inscribirse</a></div>
    </LoginStyled>
  )
}

export default Login