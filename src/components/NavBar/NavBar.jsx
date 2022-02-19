import React from 'react'
import homeIcon from '../../guideApp/icons/home.svg'
import activityIcon from '../../guideApp/icons/activity.svg'
import userIcon from '../../guideApp/icons/user.svg'
import { NavBarStyled } from '../../styles/style'

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className='navBarIcon'><img src={homeIcon} alt="homeIcon"/> <p>Home</p></div>
      <div className='navBarIcon'><img src={activityIcon} alt="homeIcon"/> <p>Estadisticas</p></div>
      <div className='navBarIcon'><img src={userIcon} alt="homeIcon"/> <p>Perfil</p></div>
      
    </NavBarStyled>
  )
}

export default NavBar