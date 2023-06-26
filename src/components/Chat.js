import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Container, Grid, TextField } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Chat = () => {
    console.log('chachachat')
    const { auth, firestore } =useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [message, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'));

    const sendMessage = async () => {
        console.log(value)
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoUrl,
            text: value,
            cratedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    }
    if (loading) {
        return (<Loader/>)
    }
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
                          rowmax={2}
                          variant={"outlined"}
                          value={value}
                          onChange={e => setValue(e.target.value)}
                        />
                        <Button 
                          variant={'outlined'}
                          onClick={sendMessage}
                        > Send </Button>
                        {/* <Button> Send </Button> */}
                    </Grid>
              </Grid>
            {/* chat */}
        </Container>
    );
};

export default Chat;