import React from 'react'

const Card = (props) => {
  return (
    <div className="tarjetas__card">
				<img className="card__img" src={props.img} alt="cards" />
				<div className="card__text">
					<h3 className="card__h3">
						{props.title + ''} <span className="card__span">Starbucks</span>
					</h3>
					<p className="card__p">{props.description}</p>
					<div class="card__btns"> 
					<input className="card__btn" type="button" value={props.textContentBtn} />
					</div>
                    {props.estatus ? <div className="cards__circle">{props.circle}</div> : null}
				</div>
	</div>
  )
}

export default Card