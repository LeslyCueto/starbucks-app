import React from 'react'

const BtnHeader = (props) => {
  return (
    <a className="header__a" href={props.href}>
        {props.content}
    </a>
  )
}

export default BtnHeader