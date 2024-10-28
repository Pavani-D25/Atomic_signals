

import React from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import Logo from "../../../public/images/logo";


const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleGetLink = () => {
    const message = "Link set to registered email."; 
    navigate("/reset-password", { state: { alertMessage: message } }); 
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
            Forgot Password
          </Typography>
          <Typography
            color="#71707e"
            align="left"
            sx={{
              fontFamily: "Poppins",
              mb: "24",
              fontSize: "14.5px",
              fontWeight: "400",
            }}
          >
            Provide us the registered email to reset your password.
          </Typography>
        </Box>

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
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleGetLink}
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
          Get Link
        </Button>

        <Typography
          color="textSecondary"
          sx={{ fontFamily: "Poppins", mt: "32px", fontSize: "14px" }}
        >
          Remembered the password?{" "}
          <Link
            to="/sign-in"
            style={{
              color: "#353448",
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            Log in
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;




// import React from "react"; 
// import { useNavigate, Link } from "react-router-dom"; 
// import ForgotPasswordStyles from './ForgotPasswordStyles'; // Import your styles
// import { Box, Paper, Typography, TextField, Button } from '@mui/material'; // Add this line to import Box and other MUI components

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const styles = ForgotPasswordStyles(); // Get the styles

//   const handleGetLink = () => {
//     const message = "Link set to registered email."; 
//     navigate("/reset-password", { state: { alertMessage: message } }); 
//   };

//   return (
//     <Box sx={styles.container}>
//       <Paper elevation={3} sx={styles.paper}>
//         <Box sx={styles.logoContainer}>
//           <img
//             src="/images/logo.svg"
//             alt="Atomic Logo"
//             style={{ width: "30px", height: "29px", marginBottom: "8px" }}
//           />
//           <Typography
//             align="left"
//             sx={{
//               fontFamily: "Poppins",
//               fontSize: "16px",
//               fontWeight: "600",
//               color: "#665cd7",
//               ml: 1,
//             }}
//           >
//             Atomic signals
//           </Typography>
//         </Box>

//         <Box mb={2} display="flex" flexDirection="column" alignItems="start">
//           <Typography sx={styles.heading}>Forgot Password</Typography>
//           <Typography sx={styles.subText}>
//             Provide us the registered email to reset your password.
//           </Typography>
//         </Box>

//         <Box sx={{ mb: 2 }}>
//           <Typography sx={styles.emailLabel}>Email</Typography>
//           <TextField
//             fullWidth
//             type="email"
//             required
//             sx={styles.textField}
//           />
//         </Box>

//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleGetLink}
//           sx={styles.button}
//         >
//           Get Link
//         </Button>

//         <Typography sx={styles.linkText}>
//           Remembered the password?{" "}
//           <Link
//             to="/sign-in"
//             style={{
//               color: "#353448",
//               fontFamily: "Poppins",
//               fontWeight: "600",
//             }}
//           >
//             Log in
//           </Link>
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default ForgotPassword;
