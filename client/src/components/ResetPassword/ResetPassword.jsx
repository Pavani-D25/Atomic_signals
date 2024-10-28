

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 


import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import Logo from "../../../public/images/logo";

import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const alertMessage = location.state?.alertMessage; 
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleClickShowPassword1 = () => {
    setShowPassword1((prev) => !prev);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2((prev) => !prev);
  };

  const handleResetPassword = () => {
   
    navigate('/dashboard'); 
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={1000}
      backgroundColor="#EFEEFB"
      minHeight="100vh"
    >
      {visible && (
        <Alert
          backgroundColor="#7FDCA4"
          onClose={() => setVisible(false)} // Hide the alert on close
          icon={false}
          sx={{
            position: "absolute",
            top: 60,
            backgroundColor: "#cef3e4",
            border: "1px solid #49C792",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontWeight: "500",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {alertMessage}
        </Alert>
      )}

      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
          width: "350px",
        }}
      >
         <Box
          mb={2}
          display="flex"
          justifyContent="start"
          alignItems="start"
          flexDirection={"row"}
        >
          <Logo
            style={{ width: "30px", height: "29px", marginBottom: "8px" }}
          />
          <Typography
            align="left"
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "600",
              color: "#665cd7",
              ml: 1,
            }}
          >
            Atomic signals
          </Typography>
        </Box>

        <Box mb={2} display="flex" flexDirection="column" alignItems="start">
          <Typography
            gutterBottom
            sx={{
              fontFamily: "Poppins",
              fontSize: "22px",
              fontWeight: "600",
              mb: "8px",
            }}
          >
            Reset Password
          </Typography>
          <Typography
            color="#71707e"
            align="left"
            sx={{
              fontFamily: "Poppins",
              fontSize: "14.5px",
              fontWeight: "400",
            }}
          >
            Please provide a new password for your account.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              mb: "8px",
              display: "flex",
              fontFamily: "Poppins",
              fontSize: "12px",
              mt: "24.62px",
              color: "#585768",
              fontWeight: "500",
            }}
          >
            New password <span style={{ color: "red", marginLeft: "2px" }}>* </span>
          </Typography>
          <TextField
            fullWidth
            type={showPassword1 ? "text" : "password"}
            required
            sx={{
              fontFamily: "Poppins",
              "& .MuiOutlinedInput-root": {
                padding: "4px 10px",
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#d3d3d3",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#d3d3d3",
                },
              },
              "& .MuiInputBase-input": {
                height: "30px",
                padding: "0",
                fontSize: "14px",
                fontFamily: "Poppins",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword1}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                    sx={{ pr: 2 }}
                  >
                    {showPassword1 ? (
                      <VisibilityOffOutlined sx={{ fontSize: "18px" }} />
                    ) : (
                      <VisibilityOutlined sx={{ fontSize: "18px" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              mb: "8px",
              display: "flex",
              fontFamily: "Poppins",
              fontSize: "12px",
              mt: "24.62px",
              color: "#585768",
              fontWeight: "500",
            }}
          >
            Confirm new password <span style={{ color: "red", marginLeft: "2px" }}>* </span>
          </Typography>
          <TextField
            fullWidth
            type={showPassword2 ? "text" : "password"}
            required
            sx={{
              fontFamily: "Poppins",
              "& .MuiOutlinedInput-root": {
                padding: "4px 10px",
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#d3d3d3",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#d3d3d3",
                },
              },
              "& .MuiInputBase-input": {
                height: "30px",
                padding: "0",
                fontSize: "14px",
                fontFamily: "Poppins",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword2}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                    sx={{ pr: 2 }}
                  >
                    {showPassword2 ? (
                      <VisibilityOffOutlined sx={{ fontSize: "18px" }} />
                    ) : (
                      <VisibilityOutlined sx={{ fontSize: "18px" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleResetPassword} // Update this line

          sx={{
            textTransform: "none",
            mt: "4px",
            fontFamily: "Poppins",
            backgroundColor: "#58b89c",
            color: "white",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#6cdbad",
              boxShadow: "none",
            },
          }}
        >
          Reset password
        </Button>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
