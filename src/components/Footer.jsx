import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenido__footer">
        <div className="footer__cnt1">
            <a className="footer__a" href="#">Iniciar Sesion</a>
            <a className="footer__a" href="#">Registrarse</a>
        </div>
        <div className="footer__cnt2">
            <a className="footer__redes" href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
            <a className="footer__redes" href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            <a className="footer__redes" href="#"><ion-icon name="logo-twitter"></ion-icon></a>
        </div>
        <div className="footer__cnt3">
            <a className="footer__contactanos" href="#">Contactanos aqui</a>
        </div>
        </div>
    </footer>
  )
}

export default Footer