// import React from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Divider,
//   Paper,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import Logo from "../../../public/images/logo";
// import GoogleIcon from "../../../public/images/GoogleIcon";
// import MicOutlookIcon from "../../../public/images/MicOutlookIcon";

// const Register = () => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       bgcolor="#f5f7fb"
//       zIndex={1000}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           textAlign: "center",
//           width: "350px",
//         }}
//       >
//         <Box
//           mb={2}
//           display="flex"
//           justifyContent="start"
//           alignItems="start"
//           flexDirection={"row"}
//         >
//           <Logo
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

//         {/* Sign Up Text */}
//         <Box mb={2} display="flex" flexDirection="column" alignItems="start">
//           <Typography
//             gutterBottom
//             sx={{
//               fontFamily: "Poppins",
//               fontSize: "22px",
//               fontWeight: "600",
//               mb: "8px",
//             }}
//           >
//             Sign up
//           </Typography>
//           <Typography
//             color="#8c8b96"
//             align="left"
//             sx={{
//               fontFamily: "Poppins",
//               mb: "24",
//               fontSize: "12px",
//               fontWeight: "400",
//             }}
//           >
//             You're just a few details away to set up a culture of feedback and a
//             thriving environment.
//           </Typography>
//         </Box>

//         {/* Google Sign Up Button */}

//         <Button
//           startIcon={<GoogleIcon />} // Replace <img> with <GoogleIcon />
//           sx={{
//             width: "352px",
//             textTransform: "none",
//             mb: "16px",
//             display: "flex",
//             paddingLeft: 2,

//             justifyContent: "center",
//             alignItems: "center",
//             position: "relative",
//             fontFamily: "Poppins",
//             backgroundColor: "#f8f8f8",
//           }}
//         >
//           <span
//             style={{
//               flex: 1,
//               textAlign: "center",
//               fontSize: "14px",
//               color: "#353448",
//             }}
//           >
//             Sign up with Google
//           </span>
//         </Button>

//         {/* Outlook Sign Up Button */}

//         <Button
//           startIcon={<MicOutlookIcon  />} // Use your MicOutlookIcon component
//           sx={{
//             width: "352px",
//             textTransform: "none",
//             mb: 1,
//             paddingLeft: 2,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             position: "relative",
//             fontFamily: "Poppins",
//             backgroundColor: "#f8f8f8",
//           }}
//         >
//           <span
//             style={{
//               flex: 1,
//               textAlign: "center",
//               fontSize: "14px",
//               color: "#353448",
//             }}
//           >
//             Sign up with Outlook
//           </span>
//         </Button>

//         {/* Divider */}
//         <Divider
//           sx={{
//             my: 2,
//             mt: "24.38px",
//             fontFamily: "Poppins",
//             color: "#8c8b96",
//             fontSize: "12px",
//             fontWeight: "500",
//             "&:before, &:after": {
//               borderColor: "#f8f8f8",
//               borderWidth: "2.2px",
//             },
//             px: 5,
//             textAlign: "center",
//           }}
//         >
//           or
//         </Divider>

//         {/* Email Input */}
//         <Box sx={{ mb: 2 }}>
//           <Typography
//             sx={{
//               mb: "8px",
//               display: "flex",
//               fontFamily: "Poppins",
//               fontSize: "12px",
//               mt: "24.62px",
//               color: "#585768",
//               fontWeight: "500",
//             }}
//           >
//             Work Email{" "}
//             <span style={{ color: "red", marginLeft: "4px" }}>* </span>
//           </Typography>
//           <TextField
//             fullWidth
//             type="email"
//             required
//             defaultValue="atomicsignals@gmail.com"
//             sx={{
//               fontFamily: "Poppins",
//               "& .MuiOutlinedInput-root": {
//                 padding: "4px 10px",
//                 "& fieldset": {
//                   borderColor: "#e0e0e0",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#d3d3d3",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#d3d3d3",
//                 },
//               },
//               "& .MuiInputBase-input": {
//                 height: "30px",
//                 padding: "0",
//                 fontSize: "14px",
//                 fontFamily: "Poppins",
//               },
//             }}
//           />
//         </Box>

//         {/* Sign Up Button */}
//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             textTransform: "none",
//             mb: 2,
//             fontFamily: "Poppins",
//             backgroundColor: "#58b89c",
//             color: "white",
//             boxShadow: "none",
//             "&:hover": {
//               backgroundColor: "#6cdbad",
//               boxShadow: "none",
//             },
//           }}
//         >
//           Sign up
//         </Button>

//         {/* Log In Link */}
//         <Typography
//           color="textSecondary"
//           sx={{ fontFamily: "Poppins", mt: "6px", fontSize: "14px" }}
//         >
//           Already have an account?{" "}
//           <RouterLink
//             to="/sign-in"
//             style={{
//               color: "#353448",
//               fontFamily: "Poppins",
//               fontWeight: "600",
//             }}
//           >
//             Log in
//           </RouterLink>
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Register;







import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../../public/images/logo";
import GoogleIcon from "../../../public/images/GoogleIcon";
import MicOutlookIcon from "../../../public/images/MicOutlookIcon";
import registerStyles from "./RegisterStyles";

const Register = () => {
  return (
    <Box sx={registerStyles.container}>
      <Paper elevation={3} sx={registerStyles.paper}>
        <Box sx={registerStyles.logoContainer}>
          <Logo style={registerStyles.logo} />
          <Typography sx={registerStyles.logoText}>Atomic signals</Typography>
        </Box>

        <Box sx={registerStyles.signUpTextContainer}>
          <Typography sx={registerStyles.signUpText}>Sign up</Typography>
          <Typography sx={registerStyles.signUpDescription}>
            You're just a few details away to set up a culture of feedback and a
            thriving environment.
          </Typography>
        </Box>

        <Button startIcon={<GoogleIcon />} sx={registerStyles.button}>
          <span style={registerStyles.buttonText}>Sign up with Google</span>
        </Button>

        <Button startIcon={<MicOutlookIcon />} sx={registerStyles.button}>
          <span style={registerStyles.buttonText}>Sign up with Outlook</span>
        </Button>

        <Divider sx={registerStyles.divider}>or</Divider>

        <Box sx={registerStyles.emailInputContainer}>
          <Typography sx={registerStyles.emailLabel}>
            Work Email <span style={{ color: "red", marginLeft: "4px" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            type="email"
            required
            defaultValue="atomicsignals@gmail.com"
            sx={registerStyles.emailInput}
          />
        </Box>

        <Button variant="contained" fullWidth sx={registerStyles.signUpButton}>
          Sign up
        </Button>

        <Typography sx={registerStyles.logInText}>
          Already have an account?{" "}
          <RouterLink to="/sign-in" style={registerStyles.logInLink}>
            Log in
          </RouterLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
