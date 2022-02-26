import React from "react";
import {
    Box,
    Grid,
    Button
} from "@mui/material";
import EVResume from '../assets/resume/resume.pdf';


function Resume() {

    return (
        <>
            <Box sx={{backgroundColor: '#ffffff', pt: 5}}>
                <Grid container direction="row" justifyContent="center" sx={{ pb: 10 }}>
                    <Button 
                        variant="contained" 
                        component='a' 
                        href={EVResume} 
                        download="Ernesto_V_Resume.pdf"
                        sx={{backgroundColor: '#3782c8', color:'#ffffff', '&.MuiButtonBase-root:hover': { bgcolor: '#ffffff', color:'#3782c8' }}}>
                        Click here to download my resume
                    </Button>
                </Grid>
            </Box>
        </>
    );
};

export default Resume;