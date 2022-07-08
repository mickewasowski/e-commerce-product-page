import ShoeImagesSection from './shoe-images-section/shoeImages';
import DetailsSection from './details-and-buttons/detailsAndButtons';

import {MainContainer} from './main.styles';

function Main(){

    return(
        <MainContainer>
            <ShoeImagesSection />
            {/* <DetailsSection /> */}
        </MainContainer>
    )
}

export default Main;