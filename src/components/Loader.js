import React from 'react';
import { Container, Grid } from '@mui/material';

const Loader = () => {
    return (
        <Container>
            <Grid container
              style={{heigth: window.innerHeight - 50, background: 'lightgray'}}
              alignitems={'center'}
              justifycontent={'center'}
              variant='outlined'
            >
                {/* <div className="lds-hourglass"></div> */}
                
                <Grid 
                //   container
                //   style={{height: 400, background: 'lightblue'}}
                //   alignitems={'center'}
                //   justifycontent={'center'}
                //   variant='outlined'
                >
                    <div className="lds-hourglass"></div>
                    <div> hhfhdvhf </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;