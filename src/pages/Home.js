import React from "react";
import { Grid, Box, Typography, Avatar, } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import Typed from 'react-typed';
import TheAvatar from '../assets/profile_pic/self.png';

const useStyles = makeStyles(theme => ({
    title: {
        color: '#2b2d42',
        fontSize: "4rem",
    },
    subtitle: {
        color: '#3782c8',
        fontSize: "2rem",
        marginBottom: '8rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))

function Home() {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.typedContainer}>
                <Grid container justifyContent='center'>
                    <Avatar
                        className={classes.avatar}
                        src={TheAvatar}
                        alt='Ernesto'
                        sx={{ bgcolor: '#2b2d42', width: 300, height: 300 }}
                    />
                </Grid>
                <Typography className={classes.title} variant='h6'>
                    <Typed strings={['Ernesto Valecillos']} typeSpeed={100} showCursor={false} />
                </Typography>
                <Typography>

                </Typography>
                <Typography className={classes.subtitle} variant='h6'>
                    <Typed
                        strings={['Full Stack Web Development', 'JavaScript', 'M.E.R.N. Stack', 'Java', 'Soccer', 'Video Games', 'Rock & EDM']}
                        typeSpeed={50}
                        backSpeed={25}
                        startDelay={3000}
                        loop />
                </Typography>
            </Box>
        </>
    );
}

export default Home;