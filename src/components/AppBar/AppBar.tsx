import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { appBarStyles } from './AppBarStyles';
import { Grid } from '@material-ui/core';


export const Appbar = () => {
    const classes = appBarStyles()
    return (
        <Grid container>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense">

                        <Typography variant="h6" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </Grid>
    )
}
