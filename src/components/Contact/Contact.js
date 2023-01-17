import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css'
import contactImg from '../../assests/Contacto-img.png'

const Contact = () => {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_27cidym', 'template_g036kcm', form.current, '21mmw6cL4VdtOPAoe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <div id='contact'>
        <div className='contact-title'>
            <h2 className=''>CONTACTO</h2>
            <p>¿Tenes algo que decirnos o preguntarnos? ¡Nos encantaría escucharlo!</p>
        </div>
        <div className='contact-content d-flex justify-content-center flex-row'>
            <div className='contact-img'>
                <img src={contactImg} className='m-5' alt='...'></img>
            </div>
            <div >
                <form ref={form} onSubmit={sendEmail} action='' className='d-flex flex-column'>
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