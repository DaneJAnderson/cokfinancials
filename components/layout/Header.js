
// import React from 'react';
// import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, NavDropdown} from 'react-bootstrap';
// import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useEffect, useRef } from "react"

// import { useScrollPosition } from "./useScrollPosition"


const Header = () => {
    const router = useRouter();
    const hideNavRef = useRef(null);

    // --------------------------------------------------//

    // const [sticky, setSticky] = useState(true)

    // useScrollPosition(
    //   ({ prevPos, currPos }) => {
    //     const isShow = currPos.y > prevPos.y
    //     if (isShow !== sticky) setSticky(isShow)
    //   },
    //   [sticky]
    // )

    useEffect(()=>{


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        hideNavRef.current.style.top = "0";
    } else {
        hideNavRef.current.style.top = "-100px";
    }
      prevScrollpos = currentScrollPos;
    }

    },[])


    // --------------------------------------------------//
   
    const base = '/Promotions/';
    // const base = '';

    const headerRoute = (e,route) => {      
      e.preventDefault();
      // router.push(e.target.value);
      router.push(route);   
    }

    
  
    return ( 

      <div ref={hideNavRef} id="navbar"
      
      /* style={{
        position: "sticky",
        transform: sticky ? "translateY(0%)" : "translateY(-100%)",
        transition: "transform 400ms ease-in",
        bottom: 0,
        left: 0,        
        top: 0,
        zIndex:1020
      }} */
    >
  <Navbar collapseOnSelect bg="light" expand="md" 
  // sticky="top"  
  

  >
    <Container className="Red" style={{marginTop: '-10px', marginBottom:'-7px'}}>

      <Navbar.Brand href="/Promotions" >
          <img src="/Promotions/images/COK_Sodality_Logo.png" width="180px" alt="COK Logo"/> 
          {/* <div > */}
          {/* <Image src="/images/COK_Sodality_Logo.png" width="180" height="56" alt="COK Logo" />  */}
          {/* </div> */}

      </Navbar.Brand>
      <span style={{flexGrow: 20}}></span>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" > 
        <Nav className="me-auto ">
          <Nav.Link href="https://cokcu.com" > 
            HOME          
            </Nav.Link>
          
          <NavDropdown title="PROMOTIONS" id="basic-nav-dropdown" renderMenuOnMount={true} >
            <NavDropdown.Item onClick={(e)=>headerRoute(e, "/auto-loan")}  href="auto-loan">Auto Loan</NavDropdown.Item>  
            <NavDropdown.Divider />       
            <NavDropdown.Item onClick={(e)=>headerRoute(e, "/loan-for-home")}  href="loan-for-home">Loan for Home</NavDropdown.Item>
            <NavDropdown.Divider />      
            <NavDropdown.Item onClick={(e)=>headerRoute(e, "/home-equity-loan")}  href="home-equity-loan">Home Equity Loan</NavDropdown.Item>
            <NavDropdown.Divider />      
            <NavDropdown.Item onClick={(e)=>headerRoute(e, "/mortgage")}  href="mortgage">Mortgage</NavDropdown.Item>
            <NavDropdown.Divider />      
            <NavDropdown.Item onClick={(e)=>headerRoute(e, "/mortgage-refinance")}  href="mortgage-refinance">Mortgage Refinance</NavDropdown.Item>
            <NavDropdown.Divider />      
            <NavDropdown.Item onClick={(e)=>headerRoute(e, "/unsecured-loan")}  href="unsecure-loan">Unsecured Loan</NavDropdown.Item>
            {/* <NavDropdown.Divider />       */}
            {/* <NavDropdown.Item onClick={(e)=>headerRoute(e, "deferred-shares")}  href="deferred-shares">Deferred Shares</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
    );
}
export default Header;








































/* import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; */



   // <div className={classes.root}>
  /*   <div style={{flexGrow: 1}}>
      <AppBar position="static" color="transparent" >
        <Toolbar >
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow: 1}} className="" >
            <img src="/images/COK_Sodality_Logo.png" width="180px"/>
          </Typography>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </div> */
