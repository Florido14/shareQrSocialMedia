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
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//falta setear en el state para luego guardarlo en localstorage y generar el codigo QR

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header">
        <span>Oprime el icono y guarda el URL</span>
        <Container sx={{ flexGrow: 1, justifyContent: "center" }}>
          {/* Row one */}
          <Grid container spacing={1} columns={16} justifyContent="center">
            {/* Facebook */}
            <Button variant="outlined" onClick={handleClickOpen}>
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

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Agregar URL Facebook</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ingresa el URL de tu red social: (Ej:
                  https://www.facebook.com/profile.php?id=123456789)
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="URL"
                  type="url"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Agregar</Button>
              </DialogActions>
            </Dialog>
            <Button variant="outlined" onClick={handleClickOpen}>
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

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Agregar URL Whatsapp</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ingresa el URL de tu red social: (Ej:
                  https://wa.me/1XXXXXXXXXX)
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="URL"
                  type="url"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Agregar</Button>
              </DialogActions>
            </Dialog>
          </Grid>

          {/* Row two */}
          <Grid container spacing={1} columns={16} justifyContent="center">
            {/* Instagram */}
            <Button variant="outlined" onClick={handleClickOpen}>
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

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Agregar URL Instagram</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ingresa el URL de tu red social: (Ej:
                  https://www.facebook.com/profile.php?id=123456789)
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="URL"
                  type="url"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Agregar</Button>
              </DialogActions>
            </Dialog>
            <Button variant="outlined" onClick={handleClickOpen}>
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

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Agregar URL Twitter</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ingresa el URL de tu red social: (Ej:
                  https://wa.me/1XXXXXXXXXX)
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="URL"
                  type="url"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Agregar</Button>
              </DialogActions>
            </Dialog>
          </Grid>

          {/* Row three */}
          <Grid container spacing={1} columns={16} justifyContent="center">
            {/* Snapchat */}
            <Button variant="outlined" onClick={handleClickOpen}>
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

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Agregar URL Snapchat</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ingresa el URL de tu red social: (Ej:
                  https://www.facebook.com/profile.php?id=123456789)
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="URL"
                  type="url"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Agregar</Button>
              </DialogActions>
            </Dialog>
            <Button variant="outlined" onClick={handleClickOpen}>
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

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Agregar URL </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ingresa el URL de tu red social: (Ej:
                  https://wa.me/1XXXXXXXXXX)
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="URL"
                  type="url"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Agregar</Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <div className="btn-create">
            <Button
              onClick={() => {
                alert("Redes sociales agregadas");
               
              }}
              variant="contained"
            
        
              
            >
              Generar codigo QR
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

class Save extends React.Component {
  render() {
    return (
      <>
        <FormDialog />
      </>
    );
  }
}
export default withRouter(Save);
