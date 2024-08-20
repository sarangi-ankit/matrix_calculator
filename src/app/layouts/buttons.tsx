
import React from 'react';
import { Grid, Button } from '@mui/material';

interface ButtonsProps {
  add: () => void;
  subtract: () => void;
  multiply: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ add, subtract, multiply }) => {
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }}>
      <Grid item>
        <Button variant="contained" color='success' onClick={add}>
          Add (+)
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color='success' onClick={subtract}>
          Subtract (-)
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color='success' onClick={multiply}>
          Multiply (*)
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;
