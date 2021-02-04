import React from "react";
import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from '../../firebase';
// import EditProfile from '../EditProfile/EditProfile';
import { Button, Container, AppBar, Toolbar, IconButton, Typography, StylesProvider, Grid } from '@material-ui/core';



const styles = {
  appBar: {
    backgroundColor: '#A41E34'
  }
}

function NavigationBar(props) {
  console.log(props)

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <Grid container style={{ position: 'relative' }}>
          <Grid item xs={12} sm={6} >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant="h6" >
                <span className='merriweather-sans'><strong>Gather</strong></span>
                <span className='merriweather' >@Muhlenberg</span>
              </Typography>
            </Link>
          </Grid>
          {/* <Button color="inherit">Login</Button> */}
          <Grid item xs={12} sm={3} style={{ position: 'absolute', right: '10px', bottom: '5px' }}>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
              About
            </Link>
            {props.user ?
              <>
                {/* <Typography>
                {props.user.displayName ? props.user.displayName : props.displayName}
              </Typography> */}
                <Button style={{ color: 'white', textDecoration: 'none', padding: '0px' }} >
                  <span style={{ padding: '0px 10px' }}> |</span>
                  <Typography style={{ marginRight: "20px" }} onClick={() => { auth.signOut() }}>Logout</Typography>
                </Button>
              </>
              :
              null
            }
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >

    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
    //   <Navbar.Brand href={`${process.env.PUBLIC_URL}/`} className="permanent-marker">StudyParty!</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link as={Link} to='/about'>About</Nav.Link>
    //     </Nav>
    //     <Nav style={{ marginRight: '75px' }}>
    //       {props.user ?
    //         <NavDropdown title={props.user.displayName ? props.user.displayName : props.displayName} id="collasible-nav-dropdown">
    //           {/* <EditProfile user={props.user} updateUserInState={props.updateUserInState} /> */}
    //           <NavDropdown.Item style={{ marginRight: "20px" }} onClick={() => { auth.signOut() }}>Logout</NavDropdown.Item>
    //         </NavDropdown>
    //         : null}
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  )
}

export default NavigationBar