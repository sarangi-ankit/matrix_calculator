import React from 'react';
import { Grid, TextField, Typography, Box } from '@mui/material';

interface ResultsProps {
  resultMatrix: number[][];
}

const Results: React.FC<ResultsProps> = ({ resultMatrix }) => {
  return (
    <Box
      sx={{
        marginTop: 3,
        textAlign: 'center',
        padding: 2,
        borderRadius: 2,
        backgroundColor: 'black',
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ color: 'white', fontSize: '2.4rem', fontWeight: 'bold' }}
      >
        Result
      </Typography>
      {resultMatrix.map((row, i) => (
        <Grid container justifyContent="center" key={i}>
          {row.map((cell, j) => (
            <TextField
              key={j}
              value={cell}
              type="number"
              sx={{ width: 80, margin: 1, bgcolor: 'white', fontSize: '2rem' }}
              disabled
            />
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default Results;
