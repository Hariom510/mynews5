import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <div className='anchorHead'>
                <img className='iconImg same' src="https://icon-library.com/images/in-the-news-icon/in-the-news-icon-2.jpg" alt ="" />
            NEWS INDIA</div>
            <Menu>
            {/* <Link href="/" passHref>
            <a href="replace">Go to my amazing page</a>
            </Link> */}
            {/* <Link to='/' >Home</Link>
            
             */}
            </Menu>
            <RightMenu>
                <InsideMenu>
                <Link to="/" >HOME </Link>
                <Link to="/sports">SPORTS <a href="#"></a></Link>
                <Link to="/entertainment">ENTERTAINMENT </Link>
                <Link to="/science">SCIENCE <a href="#"></a></Link>
                </InsideMenu>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                  <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <li><Link to="/" >HOME <a href="#"></a></Link></li>
                <li><Link to="/sports">SPORTS <a href="#"></a></Link></li>
                <li><Link to="/entertainment">ENTERTAINMENT </Link></li>
                <li><Link to="/science">SCIENCE <a href="#"></a></Link></li>
                <li><Link to="/business">BUSINESS <a href="#"></a></Link></li>
                <li><Link to="/technology">TECHNOLOGY <a href="#"></a></Link></li>
            </BurgerNav>

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
    padding: 0 10px;
    top:0;
    left:0;
    right: 0;
    z-index: 1;
    background:#FF9F29;

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;


`
const RightMenu = styled.div`
        display:flex;
        align-items: center;
        a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 7px;
        text-decoration:none;
        color: #333;
        
    }
    a:hover{
        color:aliceblue;
    }

`
const InsideMenu = styled.div`
   @media(max-width: 768px){
    display:none;
}
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

    &:hover{
        color: aliceblue;
    }
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background:#FF9F29;
    color: #333;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        margin: 0 2px;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
            text-decoration: none;
            color: #333;
        }
        a:hover{
            color:aliceblue;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    &:hover{
        color:aliceblue;
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`