import React from 'react'
import '../Contact/Contact.css'
import contactImg from '../../assests/Contacto-img.png'

const Contact = () => {
  return (
    <div>
        <div className='contact-title'>
            <h2 className=''>CONTACTO</h2>
            <p>¿Tenes algo que decirnos o preguntarnos? ¡Nos encantaría escucharlo!</p>
        </div>
        <div className='contact-content d-flex justify-content-center flex-row'>
            <div className='contact-img'>
                <img src={contactImg} className='m-5'></img>
            </div>
            <div >
                <form action='' className='d-flex flex-column'>
                    <input type="text" name="name" placeholder='Nombre completo' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="number" name="number" placeholder='Teléfono' required />
                    <textarea name="message" rows="7" placeholder='Tu Mensaje' required />
                    <p>Los datos que nos facilites tienen carácter confidencial y no serán cedidos a terceras personas.</p>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact