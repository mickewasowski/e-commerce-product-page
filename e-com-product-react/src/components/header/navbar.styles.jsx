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

    @media (min-width: 280px) and (max-width: 768px){
        margin: 0;
    }
`

export const LogoLink = styled(NavLink)`
    align-self: center;
    justify-content: center;
`

export const MenuBtn = styled(FaBars)`
    display: none;

    @media (min-width: 280px) and (max-width: 768px) {
        display: block;
        align-self: center;
        margin-right: .7rem;
        fill: hsl(219, 9%, 45%);
    }
`

export const CloseMenu = styled(MdClose)`
    display: none;

    @media (min-width: 280px) and (max-width: 768px) {
        display: inline-block;
        width: 100%;
        height: 3rem;
        padding-left: 1rem;
        padding-top: 1rem;
        margin-bottom: 2rem;
        transform: scale(.5);

        position: relative;
        right: 46%;
    }
`

export const BlackOut = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: #000000c2;
`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;

    @media (min-width: 280px) and (max-width: 768px) {
        display: none;
        flex-direction: column;

        z-index: 4;
        top: 0%;
        left: 0%;
        position: absolute;
        display: flex;
        margin: 0;
        background-color: white;
        width: 45%;
        height:100vh; 

        align-items: flex-start;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;

    @media (min-width: 280px) and (max-width: 768px) {
        display: none;

        width: 100%;
    }
`

export const NavUL = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (min-width: 280px) and (max-width: 768px) {
        z-index: 4;
        flex-direction: column;
        padding: 0 1rem;
    }
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

    @media (min-width: 280px) and (max-width: 768px) {
        width: 100%;
        padding: 0;
        text-align: left;
    }
`