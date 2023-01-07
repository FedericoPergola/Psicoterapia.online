import './Steps.css';
import stepsTitle from '../../assests/stepsTitle.svg';
import step1 from '../../assests/step1.png';
import step2 from '../../assests/step2.png';
import step3 from '../../assests/step3.png';

const Steps = () => {
    return (
        <div class='bg-steps'>
            <img class='img-fluid mx-auto d-block pt-5' src={stepsTitle} alt='Inicia tus sesiones'/>
            <div class='d-flex justify-content-around p-5'>
                <img src={step1} alt="1"/>
                <img src={step2} alt="2"/>
                <img src={step3} alt="3"/>
            </div>
            <div class='d-grid gap-2 col-6 mx-auto'>
            <button type="button"class="btn btn-bienv shadow mx-auto">QUIERO MI CONSULTA INICIAL</button>
            </div>
        </div>
    )
}

export default Steps;