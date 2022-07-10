

import UserCartContainer from "./userCartContainer";
import {BtnsContainer, LogoContainer, LogoLink, NavigationContainer, Nav, NavUL, UlListItem, MenuBtn, CloseMenu} from './navbar.styles';


function Navigation(){

    return(
        <>
            <BtnsContainer>
                <MenuBtn />
                <LogoContainer>
                    <LogoLink to={'/'}>
                        <img src="/images/logo.svg" />
                    </LogoLink>
                </LogoContainer>
                <NavigationContainer>
                    <CloseMenu style={{display: 'none'}}/>
                    <Nav>
                        <NavUL>
                            <UlListItem>Collections</UlListItem>
                            <UlListItem>Men</UlListItem>
                            <UlListItem>Women</UlListItem>
                            <UlListItem>About</UlListItem>
                            <UlListItem>Contact</UlListItem>
                        </NavUL>
                    </Nav>
                </NavigationContainer>
            </BtnsContainer>
            <UserCartContainer />
        </>
    )
}

export default Navigation;