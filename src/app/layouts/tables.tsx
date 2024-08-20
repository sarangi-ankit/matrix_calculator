import React from 'react';
import { Grid, TextField, Typography, Box, colors } from '@mui/material';

interface TablesProps {
  title: string;
  matrix: number[][];
  handleInputChange: (row: number, col: number, value: string) => void;
}

const Tables: React.FC<TablesProps> = ({ title, matrix, handleInputChange }) => {
  return (
    <Box sx={{ margin: '20px', bgcolor: 'white', p: 2, borderRadius: 1 }}>
      <Typography variant="h6" align="center" style={{color:"green"}}>{title}</Typography>
      {matrix.map((row, i) => (
        <Grid container justifyContent="center" key={i}>
          {row.map((cell, j) => (
            <TextField
              key={j}
              value={cell}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
              type="number"
              style={{ width: 80, margin: 5 }}
              inputProps={{ style: { textAlign: 'center' } }}
            />
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default Tables;
