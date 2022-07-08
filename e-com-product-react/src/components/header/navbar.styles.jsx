import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


export const BtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const LogoContainer = styled.div`
    display: flex;
    margin-right: 25px;
`

export const LogoLink = styled(NavLink)`
    align-self: center;
    justify-content: center;
`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`

export const NavUL = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const UlListItem = styled.li`
    margin: 15px;
    padding: 11% 0;
    list-style-type: none;
    color: hsl(219, 9%, 45%);
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid hsl(26, 100%, 55%);
        cursor: pointer;
        color: hsl(220, 13%, 13%);
    }
`