import React from "react";
import { withRouter } from "react-router";
import "../styles/social.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Save extends React.Component {
  render() {
    return (
      <>
        <Container sx={{ flexGrow: 1 }}>
          <h3>Oprime el icono y guarda el URL</h3>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withRouter(Save);
