import './Benefits.css';
import benefitsTitle from '../../assests/benefitsTitle.svg';
import benefitsCard1 from '../../assests/benefitsCard1.png';
import benefitsCard2 from '../../assests/benefitsCard2.png';
import benefitsCard3 from '../../assests/benefitsCard3.png';
import benefitsCard4 from '../../assests/benefitsCard4.png';
import benefitsCard5 from '../../assests/benefitsCard5.png';
import benefitsCard6 from '../../assests/benefitsCard6.png';

const Benefits = () => {
    return (
        <div>
            <img class='img-fluid mx-auto d-block pt-5' src={benefitsTitle} alt='Beneficios de la terapia online'/>
            <div class='d-flex flex-column'>
                <div class='d-flex justify-content-around p-5'>
                    <img src={benefitsCard1} alt='...'/>
                    <img src={benefitsCard2} alt='...'/>
                    <img src={benefitsCard3} alt='...'/>
                </div>
                <div class='d-flex justify-content-around p-5'>
                    <img src={benefitsCard4} alt='...'/>
                    <img src={benefitsCard5} alt='...'/>
                    <img src={benefitsCard6} alt='...'/>
                </div>
                
            </div>
        </div>
    )
}

export default Benefits;