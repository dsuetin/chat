import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
// import Login from './Login';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
// import { Toolbar } from '@mui/material';
const NavBar = () => {
    console.log('nananavbar')
    const user = false
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    {user ? 
                        <Button
                            variant='outlined'
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