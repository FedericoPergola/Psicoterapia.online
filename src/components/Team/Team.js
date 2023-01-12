import React from 'react'
import './Team.css'
import natalia from '../../assests/natalia.png'
import melisa from '../../assests/melisa.png'
import luciana from '../../assests/luciana.png'
import teamTitle from '../../assests/teamTitle.svg'

const Team = () => {
  return (
    <div id='team' className='team-content'>
        <div className='d-flex justify-content-center pt-5 m-5'>
            <img src={teamTitle} alt='Conoce a nuestro equipo'/>
        </div>
        <div className='Team d-flex  justify-content-evenly'>
            <div class="card-content w-25">
                <div className='d-flex justify-content-center pt-3'>
                    <img className='img card-img-top' src={natalia} alt="..."/> 
                </div>
                <div class="card-body card-body-team pt-5">
                    <p className='text-lic'>Lic. Natalia Brunati</p>
                    <p>Licenciada en Psicología</p>
                </div>
            </div>
            <div class="card-content-melisa w-25">
                <div className='d-flex justify-content-center pt-3'>
                    <img className='img card-img-top' src={melisa} alt="..."/> 
                </div>
                <div class="card-body card-body-team pt-5 ">
                    <p className='text-lic'>Lic. Melisa Condello</p>
                    <p>Licenciada en Psicología</p>
                </div>
            </div>
            <div class="card-content w-25">
                <div className='d-flex justify-content-center pt-3'>
                    <img className='img card-img-top' src={luciana} alt="..."/> 
                </div>
                <div class="card-body card-body-team pt-5">
                    <p className='text-lic'>Lic. Luciana Schammah</p>
                    <p>Licenciada en Psicología</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team