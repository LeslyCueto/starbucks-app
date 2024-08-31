import React from 'react'
import LOGO from '../image/logo.png'
import BtnHeader from './subComponents/BtnHeader.jsx'

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <img className="header__logo--img" src={LOGO} alt="logo header starbucks"/>
        </div>
        <nav className="header__nav">
				<BtnHeader  content={'Inicio'} href={'#inicio'}/>
                <BtnHeader  content={'Cafe'} href={'#cafe'}/>
                <BtnHeader  content={'Sobre Nosotros'} href={'#nosotros'}/>
                <BtnHeader  content={'Delivery'} href={'#delivery'}/>
        </nav>
        <div className="header__profile">
			<i className="header__profile--img bi bi-person-circle"></i>
        </div>
		<i className="header__bars bi bi-list"></i>
    </header>
  )
}

export default Header