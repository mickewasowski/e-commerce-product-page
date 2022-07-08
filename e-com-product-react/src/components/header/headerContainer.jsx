import Navigation from "./navbar";
import {Header as HeaderStyled} from './headerContainer.styles';

function Header(){

    return(
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
    )
}

export default Header;