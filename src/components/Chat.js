import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
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
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
    console.log(messages, 88888888888888888888);
    const sendMessage = async () => {
        console.log(value)
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL ,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
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
                    {messages.map(message => {
                        // console.log(877777777777777, message, message.photoURL, message.text);
                        return (
                            <div key={message.createdAt} style={{
                                margin:10,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                // marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                marginLeft: user.uid === message.uid ? '100px' : '10px',
                                width: 'fit-content',
                                padding: '5px',
                            }}> 
                                <Grid container>
                                    <Avatar src={message.photoURL}/>
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )
                    })}
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