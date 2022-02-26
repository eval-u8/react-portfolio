import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "contact_form",
                form.current,
                "service_rzzol6o"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Your message was sent successfully!");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Box component="div" sx={{ backgroundColor: "#ffffff" }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "50vh", px: 2 }}
            >
                <form ref={form} onSubmit={sendEmail}>
                    <Typography
                        variant="h5"
                        style={{ color: "#000000", textAlign: "center" }}
                    >
                        Use the form below or email me directly @<br></br>
                        <a href="mailto: evalecillos@gmail.com">
                            evalecillos@gmail.com
                        </a>
                    </Typography>
                    <TextField
                        label="Name"
                        onChange={handleChangeName}
                        value={name}
                        name="name"
                        placeholder="Enter your name"
                        variant="outlined"
                        fullWidth
                        required
                        margin="dense"
                        sx={{
                            "& label.Mui-focused": {
                                color: "#3782c8",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#3782c8",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#3782c8",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#3782c8",
                                },
                            },
                        }}
                    />
                    <TextField
                        value={email}
                        onChange={handleChangeEmail}
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                        required
                        margin="dense"
                        sx={{
                            "& label.Mui-focused": {
                                color: "#3782c8",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#3782c8",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#3782c8",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#3782c8",
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Message"
                        value={message}
                        onChange={handleChangeMessage}
                        name="message"
                        multiline
                        rows={5}
                        placeholder="Type your message here"
                        variant="outlined"
                        fullWidth
                        required
                        margin="dense"
                        sx={{
                            "& label.Mui-focused": {
                                color: "#3782c8",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#3782c8",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#3782c8",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#3782c8",
                                },
                            },
                        }}
                    />
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: 3,
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            endIcon={<SendIcon />}
                            sx={{
                                width: "50%",
                                color: "#ffffff",
                                bgcolor: "#3782c8",
                                "&.MuiButtonBase-root:hover": {
                                    color: "#3782c8",
                                    bgcolor: "#ffffff",
                                    borderColor: "#000000",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Box>
    );
};

export default Contact;