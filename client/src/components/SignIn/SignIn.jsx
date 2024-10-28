
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"; 
import Logo from "../../../public/images/logo";


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f7fb"
      zIndex={1000}

    >
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
            Welcome!
          </Typography>
          <Typography
            color="#71707e"
            align="left"
            sx={{ fontFamily: "Poppins", mb: "24", fontSize: "14px", fontWeight: "500" }}
          >
            One positive feedback per day or week can make us grow exponentially
          </Typography>
        </Box>

        {/* Email Input */}
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              mb: "8px",
              display: "flex",
              fontFamily: "Poppins",
              fontSize: "12px",
              mt: "20px",
              color: "#494e54",
              fontWeight: "500",
            }}
          >
            Email
          </Typography>
          <TextField
            fullWidth
            type="email"
            required
            defaultValue="atomicsignals@gmail.com"
            sx={{
              
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
          />
        </Box>

        {/* Password Input */}
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              mb: "8px",
              display: "flex",
              fontFamily: "Poppins",
              fontSize: "12px",
              mt: "16px",
              color: "#494e54",
              fontWeight: "500",
            }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            required
            defaultValue="" 
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
                    onClick={handleClickShowPassword}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                    sx={{ pr: 2 }}
                  >
                    {showPassword ? (
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

        {/* Forgot Password Link */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            mt: "10px",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
            color: "#38374b",
          }}
        >
          <RouterLink
            to="/forgot-password" 
            style={{
              color: "#353448",
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            Forgot Password?
          </RouterLink>
        </Typography>

        {/* Log In Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: "none",
            mt: '24px',
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
          Log in
        </Button>
      </Paper>
    </Box>
  );
};

export default SignIn;
