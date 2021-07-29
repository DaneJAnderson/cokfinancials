
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter()

  const headerRoute = (route) => {
    // e.preventDefault();
    // router.push(e.target.value);
    router.push(route);
   
  }

 
  return (
 
<Navbar bg="light" expand="md" sticky="top" >
  <Container className="Red" style={{marginTop: '-10px'}}>

      <Navbar.Brand href="/" >
  {/* <Link href="/" > */}
     {/* <a > */}
        <img src="/images/COK_Sodality_Logo.png" width="180px" />
         {/* </a>      */}
  {/* </Link> */}
      </Navbar.Brand>
      <span style={{flexGrow: 20}}></span>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={()=>headerRoute("/")}>
        
      {/* <Link href="/" > */}
        {/* <a className=" text-decoration-none"> */}
          HOME
          {/* </a>  */}
      {/* </Link> */}
          </Nav.Link>
        
        <NavDropdown title="PROMOTIONS" id="basic-nav-dropdown" renderMenuOnMount={true}>
          <NavDropdown.Item href="#action/3.1" >Auto Loan</NavDropdown.Item>  
          <NavDropdown.Divider />       
          <NavDropdown.Item href="#action/3.2">Loan for Home</NavDropdown.Item>
          <NavDropdown.Divider />      
          <NavDropdown.Item href="#action/3.3">Home Equity Loans</NavDropdown.Item>
          <NavDropdown.Divider />      
          <NavDropdown.Item href="#action/3.4">Mortgage</NavDropdown.Item>
          <NavDropdown.Divider />      
          <NavDropdown.Item href="#action/3.5">Mortgage Refinance</NavDropdown.Item>
          <NavDropdown.Divider />      
          <NavDropdown.Item href="#action/3.6">Unsecured Loan</NavDropdown.Item>
          <NavDropdown.Divider />      
          <NavDropdown.Item href="#action/3.7">Home Equity Loans</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

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
