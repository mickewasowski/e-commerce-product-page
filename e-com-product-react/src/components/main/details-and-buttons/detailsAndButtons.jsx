import DetailsContainer from "./details/details";
import ButtonsContainer from './buttons/buttons';

import {DetailsSectionContainer} from './detailsAndButtons.styles';

function DetailsSection(){

    return(
        <DetailsSectionContainer>
            <DetailsContainer />
            <ButtonsContainer />
        </DetailsSectionContainer>
    )
}

export default DetailsSection;