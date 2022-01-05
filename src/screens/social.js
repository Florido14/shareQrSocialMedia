import React from "react";
import { withRouter } from "react-router";
import icon from "../assets/img/welcome.svg";
import "../styles/social.css";
import Container from "@mui/material/Container";
import Swap from "./iconList";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

class Social extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Container maxWidth="fixed">
            <img src={icon} alt="Logo" className="welcome" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                p: 1,
                m: 1,
                pt: 4,
                bgcolor: "transparent",
              }}
            >
              <Swap />
            </Box>

            <div className="btn-next">
              <Button
                onClick={() => {
                  this.props.history.push("save");
                }}
                variant="contained"
                href="mailto:elcorreoquequieres@correo.com"
              >
                Continuar
              </Button>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(Social);
