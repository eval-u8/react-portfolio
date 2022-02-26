import React from "react";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from '@mui/icons-material/Language';
import {
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";

const useStyles = makeStyles({
    mainContainer: {
        height: "100%",
    },
    cardContainer: {
        width: "75%",
        minWidth: 350,
        margin: "2rem auto",
        border: "1px solid #3782c8",
        borderRadius: "25px",
    },
    pictureContainer: {
        width: "100%",
    },
    cardContent: {
        color: "#3782c8",
        backgroundColor: "#ffffff",
        display: "flex",
        borderTop: "5px solid #2b2d42",
    },
    cardActions: {
        backgroundColor: "#3782c8",
        justifyContent: "center",
    },
});

function Project(props) {
    const projects = props.projects;

    const classes = useStyles();

    return (
        <>
            <Box component="div" className={classes.mainContainer}>
                <Grid container justifyContent="center">
                    {projects.map((project) => (
                        <Grid item sm={12} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardMedia
                                    className={classes.pictureContainer}
                                    sx={{
                                        height: {
                                            xs: 150,
                                            md: 400,
                                        },
                                        objectFit: {
                                            xs: "contain",
                                            md: "cover",
                                        },
                                    }}
                                    component="img"
                                    alt={project.title}
                                    image={project.img}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography
                                                gutterBottom
                                                variant="h4" align='center'
                                            >
                                                {project.title}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                {project.description}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Built with: {project.built}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <Grid container >
                                    <Grid item xs={12} >
                                        <CardActions className={classes.cardActions} >
                                            <Button
                                                sx={{ color: "#ffffff" }}
                                                href={project.link}
                                                target="_blank"
                                                size="small"
                                            > Live link <LanguageIcon sx={{ color: "#ffffff" }}
                                                />
                                            </Button>
                                            <Button sx={{ color: "#ffffff" }}
                                                size="small"
                                                href={project.git}
                                                target="_blank"
                                            > Repo link <GitHubIcon
                                                    sx={{ color: "#ffffff" }}
                                                />
                                            </Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default Project;
