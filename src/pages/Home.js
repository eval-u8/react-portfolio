import React from "react";
import { Grid, Box, Typography, Avatar } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import TheAvatar from "../assets/profile_pic/self.png";

const useStyles = makeStyles(theme => ({
  title: {
    color: "#2b2d42",
    fontSize: "4rem"
  },
  subtitle: {
    color: "#3782c8",
    fontSize: "2rem",
    marginBottom: "8rem"
  }
  // typedContainer: {
  //     position: 'absolute',
  //     top: '40%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     width: '100vw',
  //     textAlign: 'center',
  //     zIndex: 1
  // }
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.typedContainer}>
        <Grid container justifyContent="center">
          <Avatar
            className={classes.avatar}
            src={TheAvatar}
            alt="Ernesto"
            sx={{ bgcolor: "#2b2d42", width: 300, height: 300 }}
          />
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h1">Ernesto Valecillos</Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h3">Front End Web Developer</Typography>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
