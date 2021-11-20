import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import fbicon from "../assets/img/facebook.png";
import whaicon from "../assets/img/whatsapp.png";
import instaicon from "../assets/img/instagram.png";
import twiticon from "../assets/img/twitter.png";
import snapicon from "../assets/img/snapchat.png";
import tikicon from "../assets/img/tiktok.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { withRouter } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "transparent",
  backgroundColor: "transparent",
  borderRadius: "none",
  boxShadow: "none",
  paddingTop: "30px",
}));

function FormDialog() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    setData();
  }, []);

  function setData() {
    let data = JSON.parse(localStorage.getItem("response"));
    setResponse(data);
    console.log(data);
  }

  return (
    <>
      <span className="title">Oprime el icono y accede a la red social</span>
      <Container sx={{ flexGrow: 1, justifyContent: "center" }}>
        {/* Row one */}
        <Grid container spacing={1} columns={16} justifyContent="center">
          {/* Facebook */}

          <Button
            variant="outlined"
            onClick={() => (window.location.href = response.Facebook)}
          >
            <Grid
              item
              xs={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Item>
                <img src={fbicon} alt="icon fb" className="icon" />
                <p className="items"> Facebook</p>
              </Item>
            </Grid>
          </Button>

          <Button
            variant="outlined"
            onClick={() => (window.location.href = response.Whatsapp)}
          >
            {/* Whatsapp */}
            <Grid
              item
              xs={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Item>
                <img src={whaicon} alt="icon wha" className="icon" />
                <p className="items"> Whatsapp</p>
              </Item>
            </Grid>
          </Button>
        </Grid>

        {/* Row two */}
        <Grid container spacing={1} columns={16} justifyContent="center">
          {/* Instagram */}
          <Button
            variant="outlined"
            onClick={() => (window.location.href = response.Instagram)}
          >
            <Grid
              item
              xs={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Item>
                <img src={instaicon} alt="icon insta" className="icon" />
                <p className="items"> Instagram</p>
              </Item>
            </Grid>
          </Button>

          <Button
            variant="outlined"
            onClick={() => (window.location.href = response.Twitter)}
          >
            >{/* Twitter */}
            <Grid
              item
              xs={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Item>
                <img src={twiticon} alt="icon twi" className="icon" />
                <p className="items"> Twitter</p>
              </Item>
            </Grid>
          </Button>
        </Grid>

        {/* Row three */}
        <Grid container spacing={1} columns={16} justifyContent="center">
          {/* Snapchat */}
          <Button
            variant="outlined"
            onClick={() => (window.location.href = response.Snapchat)}
          >
            <Grid
              item
              xs={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Item>
                <img src={snapicon} alt="icon snap" className="icon" />
                <p className="items"> Snapchat</p>
              </Item>
            </Grid>
          </Button>

          <Button
            variant="outlined"
            onClick={() => (window.location.href = response.Tiktok)}
          >
            {/* Tiktok */}
            <Grid
              item
              xs={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Item>
                <img src={tikicon} alt="icon tik" className="icon" />
                <p className="items"> Tiktok</p>
              </Item>
            </Grid>
          </Button>
        </Grid>
      </Container>
    </>
  );
}

class Show extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <FormDialog />
        </div>
      </>
    );
  }
}

export default withRouter(Show);
