import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import UserCartContainer from "./userCartContainer";
import {BtnsContainer, LogoContainer, LogoLink, NavigationContainer, Nav, NavUL, UlListItem} from './navbar.styles';


function Navigation(){

    return(
        <>
            <BtnsContainer>
                {/* <svg id="menu-btn" width="16" height="15" xmlns="http://www.w3.org/2000/svg" onclick="toggleNavbar()">
                <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill-rule="evenodd" />
                </svg> */}
                <FaBars style={{display: 'none'}}/>
                <LogoContainer>
                    <LogoLink to={'/'}>
                        <img src="/images/logo.svg" />
                    </LogoLink>
                </LogoContainer>
                <NavigationContainer>
                    {/* <span id="close-navbar" onclick="toggleNavbar()">
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#69707D" fill-rule="evenodd" />
                        </svg>
                    </span> */}
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