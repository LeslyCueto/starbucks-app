import React from 'react'

const Contact = () => {
  return (
    <div className="form">
        <div className="form__tittle"> 
            <h2 className="form__tittle--h2">CONTÁCTANOS</h2>
        </div>
        <form className="form__content">
            <div className="form__correo">
                <label className="form__correo--label">Correo electronico</label>
                <input className="form__correo--email" type="email" placeholder="coloque su correo electronico"/>
            </div>
            <div className="form__coment">
                <label className="form__correo--label">Comentario</label>
                <textarea className="form__correo--textarea" placeholder="coloque su comentario"></textarea>
            </div>
            <div className="form__btns">
                <button className="form__btns--send">Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Contact