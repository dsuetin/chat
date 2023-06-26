import React, { useContext } from 'react';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Container, Grid, TextField } from '@mui/material';

const Chat = () => {
    console.log('chachachat')
    const { auth, firestore } =useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <Container style={{background: 'lightblue'}}>
            <Grid container
            justify={ "center" }
              style={{heigth: window.innerHeight - 50, marginTop: '20px'}}
              >
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>

                </div>
                <Grid
                        container
                        // fullWidth
                        direction={"column"}
                        alignItems={"flex-end"}
                        style={{width: '80%'}}

                    >
                        <TextField 
                          fullWidth
                          variant={"outlined"}
                        />
                        <Button> Send </Button>
                    </Grid>
              </Grid>
            {/* chat */}
        </Container>
    );
};

export default Chat;