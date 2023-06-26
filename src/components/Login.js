import { Box, Container, Grid, Button } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../index';
import firebase from 'firebase/compat/app';

const Login = () => {
    console.log('logiiiin');
    const { auth } = useContext(Context);

    const login = async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log('useeer', user);
    };
    return (
        <Container alignitems={'center'} justifyiontent={'center'}>
            <Grid container
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
                                onClick={login}
                                variant='outlined'
                                alignitems={'center'} 
                                justifyiontent={'center'}
                                // container justify={"flex-end"}
                            >
                            Enter with google
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;