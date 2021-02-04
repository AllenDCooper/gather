import React, { Component } from 'react';
// import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { Button, Container, TextField, AppBar, Toolbar, IconButton, Typography, StylesProvider, Grid } from '@material-ui/core';
import './About.css'


class About extends Component {

  render() {
    const styles = {
      appBar: {
        backgroundColor: '#A41E34'
      },
      header: {
        textAlign: 'center',
        color: 'black',
        margin: '0px',
        padding: '30px'
      },
      formCol: {
        margin: '10px 0px',
        display: 'flex'
      },
      formColButton: {
        margin: '10px 0px',
        textAlign: 'left',
        paddingLeft: '20px'
      }
    }

    return (
      <div>
        <Container style={{ backgroundColor: 'white' }}>
        <div>
          <h1 style={styles.header} className='merriweather'>About</h1>
        </div>
          <Grid>
            <Grid>
              <p className='about-description montserrat'>Gather helps students study together to achieve their learning goals. We are dedicated to the simple idea that learning should be social. When we learn together, we help each other stay on task, work through gaps in our comprehension, and have fun!
              </p>
            </Grid>
          </Grid>
          <div className='about-us'>
            <Grid>
              <Grid>
                <h3 className='permanent-marker team-header'>Our Team!</h3>
              </Grid>
            </Grid>
            <Grid container style={{ paddingBottom: '50px', marginBottom: '50px' }}>
              <Grid item xs={6} sm={4}>
                <img src='' className="headshot" alt="headshot" roundedCircle />
                <h6 className='name montserrat'>David Spector</h6>
              </Grid>
              <Grid item xs={6} sm={4}>
                <img src='' className="headshot" alt="headshot" roundedCircle />
                <h6 className='name montserrat'>Allen Cooper</h6>
              </Grid>
              <Grid item xs={6} sm={4}>
                <img src="" className="headshot" alt="headshot" roundedCircle />
                <h6 className='name montserrat'>Danny Grossman</h6>
              </Grid>
              <Grid item xs={6} sm={4}>
                <img src="" className="headshot" alt="headshot" roundedCircle />
                <h6 className='name montserrat'>Kyle Tomanelli</h6>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    )
  }
}

export default About;