import React from "react";
import { makeStyles } from '@material-ui/core'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'


const useStyles = makeStyles({
    foot: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <Box component='footer' className={classes.foot} >
            <BottomNavigation sx={{ bgcolor: '#3782c8' }} showLabels>
                <BottomNavigationAction sx={{ color: '#ffffff' }} href='https://github.com/eval-u8' target='_blank' label="GitHub" className={classes.root} icon={<GitHubIcon />} />
                <BottomNavigationAction sx={{ color: '#ffffff' }} href='https://www.linkedin.com/in/evalecillos/' target='_blank' label="LinkedIn" className={classes.root} icon={<LinkedInIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default Footer;