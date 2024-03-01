import React from 'react'
import './Proyects.css'
import Img  from '../../assets/Libros.jpg'
export const Proyects = (props) => {
  return (
    <div className='proyect' >
        <img src={Img} alt="" />
        <div>
          <h3>{props.title}</h3>
          <p className='description2'>{props.description}</p>
          <a href="">Ir al Proyecto</a>
        </div>
        
    </div>
  )
}
