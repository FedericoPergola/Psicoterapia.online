import './LineaDiv.css'
import lineaDiv from '../../assests/lineaDiv.jpg'

const LineaDiv = () =>{
    return (
        <div class="container-fluid container-modif-lineaDiv">
            <img class="div-img" src={lineaDiv} alt="lineaDiv"/>
        </div>
    )
}

export default LineaDiv;