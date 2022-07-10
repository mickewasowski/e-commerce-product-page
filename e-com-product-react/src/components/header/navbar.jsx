import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import UserCartContainer from "./userCartContainer";
import {BtnsContainer, LogoContainer, LogoLink, NavigationContainer, Nav, NavUL, UlListItem} from './navbar.styles';


function Navigation(){

    return(
        <>
            <BtnsContainer>
                <FaBars style={{display: 'none'}}/>
                <LogoContainer>
                    <LogoLink to={'/'}>
                        <img src="/images/logo.svg" />
                    </LogoLink>
                </LogoContainer>
                <NavigationContainer>
                    <MdClose style={{display: 'none'}}/>
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