import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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

export const MenuBtn = styled(FaBars)`
    display: none;

    @media (min-width: 280px) and (max-width: 750px) {
        display: block;
        align-self: center;
        margin-right: .7rem;
        fill: hsl(219, 9%, 45%);
    }
`

export const CloseMenu = styled(MdClose)`
    display: none;

    @media (min-width: 280px) and (max-width: 750px) {
        display: inline-block;
        width: 100%;
        height: 3rem;
        padding-left: 1rem;
        padding-top: 1rem;
        margin-bottom: 2rem;
    }
`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;

    @media (min-width: 280px) and (max-width: 750px) {
        display: none;
    }
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