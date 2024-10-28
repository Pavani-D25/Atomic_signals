import React from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';

const ForgotPasswordStyles = () => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#f5f7fb',
      zIndex: 1000,
    },
    paper: {
      padding: 4,
      borderRadius: 3,
      textAlign: 'center',
      width: '350px',
    },
    logoContainer: {
      mb: 2,
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      flexDirection: 'row',
    },
    heading: {
      fontFamily: 'Poppins',
      fontSize: '22px',
      fontWeight: 600,
      mb: '8px',
    },
    subText: {
      color: '#71707e',
      align: 'left',
      fontFamily: 'Poppins',
      mb: '24',
      fontSize: '14.5px',
      fontWeight: 400,
    },
    emailLabel: {
      mb: '8px',
      display: 'flex',
      fontFamily: 'Poppins',
      fontSize: '12px',
      mt: '20px',
      color: '#494e54',
      fontWeight: 500,
    },
    textField: {
      '& .MuiOutlinedInput-root': {
        padding: '4px 10px',
        '& fieldset': {
          borderColor: '#e0e0e0',
        },
        '&:hover fieldset': {
          borderColor: '#d3d3d3',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#d3d3d3',
        },
      },
      '& .MuiInputBase-input': {
        height: '30px',
        padding: '0',
        fontSize: '14px',
        fontFamily: 'Poppins',
      },
    },
    button: {
      textTransform: 'none',
      mt: '4px',
      fontFamily: 'Poppins',
      backgroundColor: '#58b89c',
      color: 'white',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#6cdbad',
        boxShadow: 'none',
      },
    },
    linkText: {
      color: 'textSecondary',
      fontFamily: 'Poppins',
      mt: '32px',
      fontSize: '14px',
    },
  };
};

export default ForgotPasswordStyles;
