import React from "react";
import { withRouter } from "react-router";
import icon from "../assets/img/welcome.svg";
import "../styles/social.css";
import Container from "@mui/material/Container";
import Swap from "./iconList";
import Button from "@mui/material/Button";

class Social extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Container maxWidth="fixed">
            <img src={icon} alt="Logo" className="welcome" />
            <Swap />
            <div className="btn-next">
              <Button
                onClick={() => {
                  this.props.history.replace("save");
                }}
                variant="contained"
                href="#contained-buttons"
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
