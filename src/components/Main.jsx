import React from 'react'
import LOGO from '../image/logo.png'

const Main = () => {
  return (
    <main className="main">
        <div className="main__content1">
            <h1 className="main__h1">No solo es Café es<span className="main__span"> Starbucks</span></h1>
            <p className="main__p">Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas: compartir el mejor café con nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando abrió la primera tienda Starbucks en 1971, y así continúa siendo hoy.</p>
        </div>
        <div className="main__content2">
            <img className="main__img" src={LOGO}  alt="logo main starbucks"/>        
        </div>
    </main>
  )
}

export default Main