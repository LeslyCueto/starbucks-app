import React from 'react'
import Card from './subComponents/Card'
import IMAGE1 from '../image/card-1.png'
import IMAGE2 from '../image/card-2.png'
import IMAGE3 from '../image/card-3.png'
import IMAGE4 from '../image/card-4.png'

const Cards = () => {
  return (
    <div className="tarjetas">
		{/* AQUI VAN LAS CARDS INDIVIDUALES */}
        <Card 
            img={IMAGE1} 
            title={'Aplicacion de'} 
            textContentBtn={'Pruebelo'} 
            circle={'5%'} 
            estatus={true}
            description={'Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca ha sido tan facil.'}
        />
        <Card 
            img={IMAGE2} 
            title={'Delivery'} 
            textContentBtn={'Entrega por UberEats'} 
            circle={'10%'}
            estatus={true}
            description={'Starbuks entrega su comida y bebida favorita en la puerta de su casa.'}
        />
        <Card 
            img={IMAGE3} 
            title={'Novedades'} 
            textContentBtn={'Más Información'} 
            circle={''} 
            estatus={false}
            description={'Mantengase informado de nuestras ultimas novedades y actualizaciones'}
        />
        <Card 
            img={IMAGE4} 
            title={'Historias de'} 
            textContentBtn={'Más Información'} 
            circle={''} 
            estatus={false}
            description={'Descrubra nuestra empresa y nuestra historia.'}
        />
	</div>
  )
}

export default Cards