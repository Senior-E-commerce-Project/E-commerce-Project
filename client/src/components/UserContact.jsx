import React from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";
import Navbar from "./UserNav.jsx";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const UserContact = () => {
    return (
        <div>
            <Navbar /> 
            <div style={{ margin: "20px", display: "flex", position: "relative", left: 0, width: "50%" }}>
                <div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <FaPhoneAlt style={{ marginRight: "10px" }} />
                        <Typography variant="body1" style={{ fontSize: "1.2rem" }}>Give us a call</Typography>
                    </div>
                    <Typography variant="body2" style={{ marginBottom: "5px" }}>We are available 24/7, 7 days a week</Typography>
                    <Typography variant="body2" style={{ marginBottom: "10px" }}>Phone: 99150689</Typography>
                    <hr style={{ margin: "20px 0" }} />
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <CiMail style={{ marginRight: "10px" }} />
                        <Typography variant="body1">Message us</Typography>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <Typography variant="body2">Fill out our form and we will contact you</Typography>
                        <Typography variant="body2" style={{ fontStyle: "italic" }}>Email: shopaholic@gmail.com</Typography>
                    </div>
                </div>
            </div>
            <Grid container spacing={2} style={{ position: "absolute", top: 0, right: 0, marginRight: "20px", marginTop: "80px", width: "50%" }}>
                <Grid item xs={12}>
                    <form style={{ width: "70%" }}>
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: "10px", marginTop: "10px", fontSize: "1.1rem" }}
                        />
                        <TextField
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: "10px", fontSize: "1.1rem" }}
                        />
                        <TextField
                            label="Your Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            style={{ marginBottom: "10px", fontSize: "1.1rem" }}
                        />
                        <Button variant="contained" color="error" fullWidth style={{ width: "50%", alignSelf: "flex-end" }}>
                            Send Message
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default UserContact;
