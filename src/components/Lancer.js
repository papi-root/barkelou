import React from 'react';
import { makeStyles, getMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import TextField from '@material-ui/core/TextField'
import './Lancer.css'; 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }, 
}));

function getSteps() {
  return ['Projet', 'A quoi va servir la collecte', 'ContrePartie'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
          <div>
              <form>
              
                <TextField  
                  id="outlined-basic" 
                  label="Titre" 
                  variant="outlined"
                  style={{ width: '60%'}}
                /> 

                <br /> <br />
                 
                <TextField  
                  id="outlined-basic" 
                  label="Description" 
                  variant="outlined" 
                  rows={4}
                  multiline
                  style={{ width: '60%'}}
                />  
                <br />  <br />
                <TextField  
                  id="outlined-basic" 
                  label="Resume" 
                  variant="outlined"
                  style={{ width: '60%'}}
                />  
                <br />  <br />
                <TextField  
                  id="outlined-basic" 
                  label="Somme Requis" 
                  variant="outlined"
                  style={{ width: '60%'}}
                />  
                <br />  <br />
                <TextField  
                  type="date"
                  id="outlined-basic" 
                  label="Date" 
                  variant="outlined"
                  style={{ width: '60%'}}
                />  
                <br />
              </form>
          </div>
      );
    case 1:
      return (
        <div>
            <form>
            
              <TextField  
                id="outlined-basic" 
                label="Somme" 
                variant="outlined"
                style={{ width: '60.6%'}}
              />
              <br /> <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              /> &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br />  <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              />  &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br /> <br /> 
              <TextField  
                id="outlined-basic" 
                label="Somme" 
                variant="outlined"
                style={{ width: '60.6%'}}
              />
              <br /> <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              /> &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br />  <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              />  &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br /> <br /> 
              <TextField  
                id="outlined-basic" 
                label="Somme" 
                variant="outlined"
                style={{ width: '60.6%'}}
              />
              <br /> <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              /> &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br />  <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              />  &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br />

              <br /> <br /> 
              <TextField  
                id="outlined-basic" 
                label="Somme" 
                variant="outlined"
                style={{ width: '60.6%'}}
              />
              <br /> <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              /> &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br />  <br />
              <TextField  
                id="outlined-basic" 
                label="Objectif 1" 
                variant="outlined"
                style={{ width: '30%'}}
              />  &nbsp;
              <TextField  
                id="outlined-basic" 
                label="Objectif 2" 
                variant="outlined"
                style={{ width: '30%'}}
              /> 
              <br />
              
            </form>
        </div>
    );
    case 2:
      return (
        <div>
            <form>
            
              <TextField  
                id="outlined-basic" 
                label="Titre" 
                variant="outlined"
                style={{ width: '60%'}}
              /> 

              <br /> <br />
               
              <TextField  
                id="outlined-basic" 
                label="Description" 
                variant="outlined" 
                rows={4}
                multiline
                style={{ width: '60%'}}
              />  
              <br />  <br />
              <TextField  
                id="outlined-basic" 
                label="Resume" 
                variant="outlined"
                style={{ width: '60%'}}
              />  
              <br />  <br />
              <TextField  
                id="outlined-basic" 
                label="Somme Requis" 
                variant="outlined"
                style={{ width: '60%'}}
              />  
              <br />  <br />
              <TextField  
                type="date"
                id="outlined-basic" 
                label="Date" 
                variant="outlined"
                style={{ width: '60%'}}
              />  
              <br />
            </form>
        </div>
    );
    default:
      return 'Unknown stepIndex';
  }
}

export default function Lancer() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
        <div style={{ height: '10vh' }}>

        </div>
      <Stepper activeStep={activeStep} alternativeLabel id="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div style={{ marginLeft: '20%'}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" style={{ backgroundColor: '#19b4fa', color: '#fff' }}  onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
