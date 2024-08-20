"use client"
import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Input from '../layouts/input';
import Buttons from '../layouts/buttons';
import Tables from '../layouts/tables';
import Results from '../layouts/results';

const MatrixCalculator: React.FC = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [matrixA, setMatrixA] = useState<number[][]>([]);
  const [matrixB, setMatrixB] = useState<number[][]>([]);
  const [resultMatrix, setResultMatrix] = useState<number[][]>([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateMatrices = () => {

    // generate matrix(A) based on addition of row and columns value
    const newMatrixA = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: columns }, (_, j) => i + j)
    );
    // generate matrix(B) based on multiplication of row and columns value
    const newMatrixB = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: columns }, (_, j) => i * j)
    );
    setMatrixA(newMatrixA);
    setMatrixB(newMatrixB);
    setIsGenerated(true);
  };
  // updates a specific cell in matrixA when the user changes its value 
  const handleMatrixAChange = (row: number, col: number, value: string) => {
    const newMatrix = matrixA.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? Number(value) : cell))
    );
    setMatrixA(newMatrix);
  };
  // updates a specific cell in matrixB when the user changes its value 
  const handleMatrixBChange = (row: number, col: number, value: string) => {
    const newMatrix = matrixB.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? Number(value) : cell))
    );
    setMatrixB(newMatrix);
  };

  // Addition function
  const AddMatrices = () => {
    const newMatrix = matrixA.map((row, i) =>
      row.map((cell, j) => {
        const sum = Number(cell) + Number(matrixB[i][j]);
        console.log("sum", sum);
        return sum;
      })
    );
    setResultMatrix(newMatrix);
  };

  // substract function
  const SubtractMatrices = () => {
    const newMatrix = matrixA.map((row, i) =>
      row.map((cell, j) => {
        const subtract = Number(cell) - Number(matrixB[i][j]);
        // console.log("subtract", subtract);
        return subtract;
      })
    );
    setResultMatrix(newMatrix);
  };

  // multiply function
  const MultiplyMatrices = () => {
    const newMatrix = matrixA.map((row, i) =>
      matrixB[0].map((_, j) => {
        const multiply = row.reduce((sum, cell, k) => sum + cell * matrixB[k][j], 0);
        // console.log("multiply", multiply);
        return multiply;
      })
    );
    setResultMatrix(newMatrix);
  };
  // console.log("result",resultMatrix)
  return (
    <div className='bg-black min-h-screen'>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: 'white', paddingTop: 20 }}
      >
        Matrix Calculator
      </Typography>

      <Input rows={rows} columns={columns} setRows={setRows} setColumns={setColumns} />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button variant="contained" color="success" onClick={handleGenerateMatrices}>
          Generate
        </Button>
      </div>
    {/* when click on generate button then the table will display */}
      {isGenerated && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
            <Tables title="(Sum of Index (i+j))" matrix={matrixA} handleInputChange={handleMatrixAChange} />
            <Tables title="(Product of Index (i*j))" matrix={matrixB} handleInputChange={handleMatrixBChange} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Buttons add={AddMatrices} subtract={SubtractMatrices} multiply={MultiplyMatrices} />
          </div>
          {resultMatrix.length > 0 && <Results resultMatrix={resultMatrix} />}
        </>
      )}
    </div>
  );
};

export default MatrixCalculator;
