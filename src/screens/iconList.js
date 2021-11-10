//This is de component that will be used in the main page
//Jorge Florido 11-09-2021
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
//import share from "../assets/img/share.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Comparte rapidamente tus redes sociales con tus amigos",
    imgPath:
      "https://doodleipsum.com/700?i=09b0291d0d86d4384d6cd2c326de9e01",
  },
  {
    label: "Solo carga tu información rapidamente",
    imgPath:
      "https://doodleipsum.com/700?i=e712a623e3bb96e6940b4fd130045026",
  },
  {
    label: "Selecciona solo las redes sociales que quieres compartir",
    imgPath:
      "https://doodleipsum.com/700?i=c61d6643819f233bb8369cd42333a16b",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: "#2b95c9",
        alignItems: "center",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "#2b95c9",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          backgroundColor: "#2b95c9",
          alignItems: "center",
        }}
        align="center"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{
              color: "#000",
            }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{
              color: "#000",
            }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
