import React from "react";
import { Grid, Box, Avatar, Container, Typography } from '@mui/material';
import TheAvatar from '../assets/profile_pic/self.png'

function About() {
    return (
        <>
            <Box sx={{ height: '100%', backgroundColor: '#white' }} py={5}>
                <Container >
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                        <Avatar
                            src={TheAvatar}
                            alt='Ernesto'
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid sx={{ pb: 5 }}>
                        <Typography variant="h4" sx={{ py: 2 }}>About me</Typography>
                        <Typography variant='h6'>
                        Hola! the name's Ernesto. Recently graduated Full Stack Developer from UT Austin. I've always been working on computers, software or hardware related; in fact, my background was in computer repair and troubleshooting. This eventually lead into a management/mentorship position where I could teach new technicians "the ways" of working on an unit. It was a dream of mine when I as a kid to "build an application on a Mac because they are cool" and now I'm giving aiming to fulfill that goal. I'm looking forward to working with customers on building an awesome app be it solo, or as a team. I'll learn as much as I can to be able to built exciting products.
                        <br></br><br></br>
                        On a more casual level, I'm usually pretty goofy, and constantly reading random tech news on Reddit or Medium. I like learning new things, playing video games (any Horizon fans?) 🕹, playing and watching soccer ⚽️, trying new food 🍱, rock music 🎸, and travelling✈️.
                        </Typography>
                    </Grid>
                </Container>
            </Box>
        </>

    );
}

export default About;