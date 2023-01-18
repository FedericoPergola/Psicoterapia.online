import './Steps.css';
import stepsTitle from '../../assests/stepsTitle.svg';
import step1 from '../../assests/step1.png';
import step2 from '../../assests/step2.png';
import step3 from '../../assests/step3.png';
import bgSteps from '../../assests/bgSteps.png';

const Steps = () => {
    return (
        <div className='bg-steps'>
            <div className='bg-container'>
                <img className='bg-steps d-none d-sm-block' src={bgSteps} alt='...'/>
            </div>
            <img className='img-fluid mx-auto d-block pt-5' src={stepsTitle} alt='Inicia tus sesiones'/>
            <div className='d-flex justify-content-around p-5'>
                <img className='img-fluid' src={step1} alt="1"/>
                <img className='img-fluid' src={step2} alt="2"/>
                <img className='img-fluid' src={step3} alt="3"/>
            </div>
            <button type="button"className='btn btn-bienv shadow mx-auto d-block'><a href='https://calendly.com/psicoterapia-online-ar1' target="_blank" rel="noreferrer">QUIERO MI CONSULTA INICIAL</a></button>
        </div>
    )
}

export default Steps;