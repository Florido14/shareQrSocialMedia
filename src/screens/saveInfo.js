import React from "react";
import { withRouter } from "react-router";
import "../styles/social.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "../styles/saveInfo.css";
import fbicon from "../assets/img/facebook.png";
import whaicon from "../assets/img/whatsapp.png";
import instaicon from "../assets/img/instagram.png";
import twiticon from "../assets/img/twitter.png";
import snapicon from "../assets/img/snapchat.png";
import tikicon from "../assets/img/tiktok.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "transparent",
  backgroundColor: "transparent",
  borderRadius: "500px",
  boxShadow: "none",
  paddingTop: "30px",
}));

class Save extends React.Component {
  render() {
    return (
      <>
      <div className="header">
        <h3>Oprime el icono y guarda el URL</h3>
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} columns={16}>
            <Grid item xs={8}>
              <Item>
                {" "}
                <img src={fbicon} alt="icon fb" className="icon" />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                {" "}
                <img src={whaicon} alt="icon wha" className="icon" />
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={4} columns={16}>
            <Grid item xs={8}>
              <Item>
                {" "}
                <img src={instaicon} alt="icon wha" className="icon" />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                {" "}
                <img src={twiticon} alt="icon wha" className="icon" />
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={4} columns={16}>
            <Grid item xs={8}>
              <Item>
                {" "}
                <img src={snapicon} alt="icon wha" className="icon" />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                {" "}
                <img src={tikicon} alt="icon tik" className="icon" />
              </Item>
            </Grid>
          </Grid>
        </Container>
      </div>
      </>
    );
  }
}
export default withRouter(Save);
