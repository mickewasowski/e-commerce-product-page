import {useState} from 'react';
import UserCartContainer from "./userCartContainer";
import {BtnsContainer, LogoContainer, LogoLink,BlackOut, NavigationContainer, Nav, NavUL, UlListItem, MenuBtn, CloseMenu} from './navbar.styles';


function Navigation(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => {
        if (isOpen) {
            setIsOpen(false)
        }else{
            setIsOpen(true);
        }
    }

    return(
        <>
                    {
                        isOpen
                        ? <BlackOut></BlackOut>
                        : ''
                    }
            <BtnsContainer>
                <MenuBtn onClick={toggleNavigation}/>
                <LogoContainer>
                    <LogoLink to={'/'}>
                        <img src="/images/logo.svg" />
                    </LogoLink>
                </LogoContainer>
                <NavigationContainer style={isOpen ? {display: 'flex'} : {display: 'none'}}>
                    <CloseMenu style={isOpen ? {} : {display: 'none'}} onClick={toggleNavigation}/>
                    
                    <Nav style={isOpen ? {display: 'flex'} : {}}>
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