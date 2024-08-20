import React from 'react';
import { TextField, Grid } from '@mui/material';

interface InputProps {
  rows: number;
  columns: number;
  setRows: (value: number) => void;
  setColumns: (value: number) => void;
}

const Input: React.FC<InputProps> = ({ rows, columns, setRows, setColumns }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Rows"
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          fullWidth
          sx={{
            bgcolor: 'white',
            '& .MuiInputLabel-root': {
              color: 'red',
              fontSize: '1.25rem',
              fontWeight: '800',
            },
            '& .MuiInputBase-root': {
              fontSize: '1rem',
            },

          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Columns"
          type="number"
          value={columns}
          onChange={(e) => setColumns(Number(e.target.value))}
          fullWidth
          sx={{
            bgcolor: 'white',
            '& .MuiInputLabel-root': {
              color: 'red',
              fontSize: '1.25rem',
              fontWeight: '800',
            },
            '& .MuiInputBase-root': {
              fontSize: '1rem',
            },

          }}
        />
      </Grid>
    </Grid>
  );
};

export default Input;
