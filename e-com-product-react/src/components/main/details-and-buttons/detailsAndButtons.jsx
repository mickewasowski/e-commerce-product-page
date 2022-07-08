import DetailsContainer from "./details/details";
import ButtonsContainer from './buttons/buttons';

function DetailsSection(){

    return(
        <section className="details-and-buttons-container">
            <DetailsContainer />
            <ButtonsContainer />
        </section>
    )
}

export default DetailsSection;