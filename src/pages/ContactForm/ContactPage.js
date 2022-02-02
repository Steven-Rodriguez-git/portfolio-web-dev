import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
const ContactPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDeafault();
    emailjs.send(
      "service_kdwj69v",
      "template_ppytjn4",
      values,
      "user_TeftIuMlk6K9z6FKx7Dhm"
    );
  };

  return (
    <div>
      <Grid
        container
        backgroundColor="#1c313a"
        minHeight="600px"
        marginTop="50px"
        padding=" 2em 1em"
        flexDirection="row"
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          height="550px"
          borderRadius="25px"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          backgroundColor="#81d4fa"
        >
          <Grid item>
            <Typography variant="h3">Work together</Typography>
          </Grid>
          <Link
            href="https://wa.me/573209736442?text=Hello,%20Steven.%20"
            target="_blank"
            underline="hover"
            color="inherit"
          >
            <Grid item>
              <Typography variant="h6">
                <WhatsAppIcon style={{ margin: "0px 10px" }} />
                Get in touch with me
              </Typography>
            </Grid>
          </Link>
          <Link
            href="/curriculum"
            target="_blank"
            underline="hover"
            color="inherit"
          >
          <Grid item>
            <Typography variant="h6">
              <AccountCircleIcon style={{ margin: "0px 10px" }} />
              Look at my resume
            </Typography>
          </Grid>
          </Link>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          height="550px"
          borderRadius="25px"
          flexDirection="column"
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#fafafa"
        >
          <Grid item margin="5px">
            <Typography variant="h6">
              <EmailIcon style={{ margin: "0px 10px" }} />
              Send us message
            </Typography>
          </Grid>
          <Grid margin="5px">
            <TextField
              onChange={handleChange}
              name="name"
              id="filled-basic"
              variant="filled"
              label="Name"
            />
          </Grid>
          <Grid margin="5px">
            <TextField
              onChange={handleChange}
              id="filled-basic"
              variant="filled"
              name="email"
              label="Email"
            />
          </Grid>
          <Grid margin="5px">
            <TextField
              onChange={handleChange}
              name="company"
              id="filled-basic"
              variant="filled"
              label="Company"
            />
          </Grid>
          <Grid margin="5px">
            <TextField
              onChange={handleChange}
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="filled"
              name="message"
            />
          </Grid>

          <Grid>
            <Button variant="outlined" onClick={handleClick}>
              Outlined
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
