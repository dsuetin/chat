import { Box, Container, Grid, Button } from '@mui/material';
import React from 'react';

const Login = () => {
    console.log('logiiiin')
    return (
        <Container alignitems={'center'} justifyiontent={'center'}>
            <Grid
              style={{heigth: window.innerHeight - 50}}
              alignitems={'center'}
              justifycontent={'center'}
            >
                <Grid 
                  style={{height: 400, background: 'lightgray'}}
                  container
                  alignitems={'center'}
                  justifycontent={'center'}
                >
                    <Box o={5}>
                        <Button
                                variant='outlined'
                                alignitems={'center'} 
                                justifyiontent={'center'}
                                // container justify={"flex-end"}
                            >
                            tyyj
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;