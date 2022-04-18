import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/Car/carSlice"
import { useSelector } from 'react-redux';

function Header() {
    const [burgurStatus, setBurgurStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);

    return (
        <Container>
            <a>
                <img src="/Tesla Images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#">Menu</a>
                <CustomMenu onClick={()=>setBurgurStatus(true)}/>
            </RightMenu>
            <BurgurNav show={burgurStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgurStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Made by CSS</a></li>
            </BurgurNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        padding: 0 15px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        margin-right: 15px;
    }
`

const BurgurNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 35px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'tanslateX(0)' : 'translateX(100%)' };
    transition: transform 0.3s;
    li{
        padding: 10px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    a{
        font-weight: 600;

    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
