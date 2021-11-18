import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

//Start Modal

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="btn-create">
        <Button onClick={handleOpenModal} variant="contained">
          Generar codigo QR
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Compartelo con tus amigos:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

//Finish Modal

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
  const [open, setOpen] = React.useState(false);
  const [social, setSocial] = useState([]);
  const [final, setFinal] = useState({
    Facebook: "https://www.facebook.com/184516",
    Whatsapp: "https://www.whatsapp.com/184516",
    Instagram: "https://www.instagram.com/184516",
    Twitter: "https://www.twitter.com/184516",
    Snapchat: "https://www.snapchat.com/184516",
    Tiktok: "https://www.tiktok.com/184516",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSocial = (idSocial) => {
    setSocial(idSocial);
    handleClickOpen();
  };

  const handleSubmit = () => {
    const newState = [...final, social];
    setFinal(newState);
    //localStorage.setItem(final, 'Url ejemplo');
    console.log(final);
    handleClose();
  };

  return (
    <>
      <span className="title">Oprime el icono y guarda el URL</span>
      <Container sx={{ flexGrow: 1, justifyContent: "center" }}>
        {/* Row one */}
        <Grid container spacing={1} columns={16} justifyContent="center">
          {/* Facebook */}
          <Button variant="outlined" onClick={() => handleSocial("Facebook")}>
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

          <Button variant="outlined" onClick={() => handleSocial("Whatsapp")}>
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
          <Button variant="outlined" onClick={() => handleSocial("Instagram")}>
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

          <Button variant="outlined" onClick={() => handleSocial("Twitter")}>
            {/* Twitter */}
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
          <Button variant="outlined" onClick={() => handleSocial("Snapchat")}>
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

          <Button variant="outlined" onClick={() => handleSocial("Tiktok")}>
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
        <form onSubmit={handleSubmit}>
          <Dialog open={open} onClose={handleClose} disablePortal>
            <DialogTitle>Agregar URL de {social}: </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Ingresa el URL de tu red social:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id={social}
                label="URL"
                fullWidth
                variant="standard"
                value="Ej:https://www.facebook.com/184516"
                type="text"
                name={social}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleSubmit}>Agregar</Button>
            </DialogActions>
          </Dialog>
        </form>
      </Container>
    </>
  );
}

class Save extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <FormDialog />
          <BasicModal />
          <div className="btn-fab">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Save);
