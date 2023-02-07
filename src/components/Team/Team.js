import React from 'react'
import './Team.css'
import natalia from '../../assests/natalia.png'
import melisa from '../../assests/melisa.png'
import luciana from '../../assests/luciana.png'
import teamTitle from '../../assests/teamTitle.svg'
import useModal from '../Hooks/useModal'
import Modal from '../Modal/Modal'


const Team = () => {

    const [isOpenFirstTeamModal, closeFirstTeamModal, openFirstTeamModal] = useModal()
    const [isOpenSecondTeamModal, closeSecondTeamModal, openSecondTeamModal] = useModal()
    const [isOpenTirdTeamModal, closeTirdTeamModal, openTirdTeamModal] = useModal()

    return (
    <div id='team' className='team-content'>
        <div className='d-flex justify-content-center pt-5 m-5'>
            <img src={teamTitle} alt='Conoce a nuestro equipo' className='img-team'/>
        </div>
        <div className='Team d-flex justify-content-evenly mobile-column'>
            <div onClick={openFirstTeamModal} class="card-content w-25">
                <div className='d-flex justify-content-center pt-3'>
                    <img className='img card-img-top' src={natalia} alt="..."/> 
                </div>
                <div class="card-body card-body-team pt-5">
                    <p className='text-lic'>Lic. Natalia Brunati</p>
                    <p>LICENCIADA EN PSICOLOGÍA</p>
                    <p>Fundadora de Psicoterapia Online</p>
                </div>
            </div>
            <div onClick={openSecondTeamModal} class="card-content-melisa w-25">
                <div className='d-flex justify-content-center pt-3'>
                    <img className='img card-img-top' src={melisa} alt="..."/> 
                </div>
                <div class="card-body card-body-team pt-5 ">
                    <p className='text-lic'>Lic. Melisa Condello</p>
                    <p>LICENCIADA EN PSICOLOGÍA</p>
                    <p>Fundadora de Psicoterapia Online</p>
                </div>
            </div>
            <div onClick={openTirdTeamModal} class="card-content w-25">
                <div className='d-flex justify-content-center pt-3'>
                    <img className='img card-img-top' src={luciana} alt="..."/> 
                </div>
                <div class="card-body card-body-team pt-5">
                    <p className='text-lic'>Lic. Luciana Schammah</p>
                    <p>LICENCIADA EN PSICOLOGÍA</p>
                    <p>Co-Fundadora de Psicoterapia Online</p>
                </div>
            </div>
        </div>
        {/*MODALES*/}

                <Modal
                isOpen={isOpenFirstTeamModal}
                closeModal={closeFirstTeamModal} className='modalTeam'>
                    <div className='modal-text modal-scroll bg-modalTeam'>
                    <h2 className='title-modal'><b>Lic. Natalia Brunati</b></h2>
                    <p className='description-modal'>Licenciada en Psicología, se recibió en la UBA en 2003. Trabajó en distintas instituciones clínicas de pacientes con padecimientos psiquiátricos tratamiento por consumo de sustancias y trastornos compulsivos.</p> 
                    <p className='description-modal'>Se desempeñó en Psicología comunitaria en el primer nivel de atención y como Directora de programas terapéuticos en Comunidad Terapéutica.</p>
                    <p className='description-modal'>Actualmente se dedica a la clínica de niños, adolescentes y adultos. Abordando tratamientos y prevención primaria de la salud.</p>
                </div>
                </Modal>
        
                <Modal
                isOpen={isOpenSecondTeamModal}
                closeModal={closeSecondTeamModal} className='modalTeam'>
                    <div className='modal-text modal-scroll bg-modalTeam'>
                    <h2 className='title-modal'><b>Lic. Melisa Condello</b></h2>
                    <p className='description-modal'>Se recibió en la Universidad de Flores con orientación en Psicología Cognitiva.Desde entonces trabajó como acompañante terapéutica en el ámbito escolar y como Orientadora vocacional dentro del ministerio y en consultas individuales. </p> 
                    <p className='description-modal'>Actualmente se dedica a acompañar procesos individuales de desarrollo personal mediante el Arteterapia, disciplina de encuentro entre dos proyectos: uno artístico y otro terapéutico. Formada en vínculos y emociones desde la psicología transpersonal, orientada al autoconocimiento y bienestar emocional.</p>
                    <p className='description-modal'>Además, trabaja en una ONG de inserción de mujeres en tecnología dentro del desarrollo de proyectos de formación y capacitación, como orientación vocacional e incubación de emprendimientos liderados por mujeres. Continúa especializándose en tecnología aplicada a la educación.”</p>
                </div>
                </Modal>

                <Modal
                isOpen={isOpenTirdTeamModal}
                closeModal={closeTirdTeamModal} className='modalTeam'>
                    <div className='modal-text modal-scroll bg-modalTeam'>
                    <h2 className='title-modal'><b>Lic. Luciana Schammah.</b></h2>
                    <p className='description-modal'>Se recibió en 2001 en la UBA, actualmente trabaja en atención clínica de adultos. Durante estos años de experiencia realizó Concurrencia en Salud Mental en los hospitales Borda y Rivadavia.</p> 
                    <p className='description-modal'>También trabajó en Comunidades terapéuticas en rehabilitación de problemáticas de consumo, con pacientes con cuadros psiquiátricos y cómo acompañante terapéutico, en forma particular y para Instituciones Psiquiátricas.</p>
                    <p className='description-modal'>Su formación durante estos años es el Psicoanálisis.</p>
                </div>
                </Modal>
    </div>
    )
}

export default Team