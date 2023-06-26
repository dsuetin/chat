import React, { useContext } from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
// import Login from './Login';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';

// import { Toolbar } from '@mui/material';
const NavBar = () => {
    console.log('nananavbar')
    const { auth } =useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar color={"secondary"} 
                position="static"
                style={{background: 'lightgray'}}
        >
            <Toolbar variant='dense'>
                <Grid container justify={"flex-end"}>
                    {user ? 
                        <Button
                            variant='outlined'
                            onClick={() => { auth.signOut(); }}
                            // container justify={"flex-end"}
                        >
                        Logout
                        </Button>
                        :
                        
                        <NavLink to={LOGIN_ROUTE}>
                            <Button
                                variant='outlined'
                                // onClick={LOGIN_ROUTE}
                                // container justify={"flex-end"}
                            >
                            Login888
                            </Button>                    
                        </NavLink>

                    }
                    

                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;