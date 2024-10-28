
// import React from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";

// const SignUp_LogIn_Layout = () => {
//   React.useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#EFEEFB",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         zIndex: -1,
//       }}
//     >
//       <Box
//         component="img"
//         src="/images/bg_design.svg"
//         alt="Background Design"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100vh",
//           objectFit: "cover",
//           margin: 0,
//           padding: 0,
//           zIndex: 2,
//         }}
//       />
//       <Outlet />
//     </Box>
//   );
// };

// export default SignUp_LogIn_Layout;




import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"; 


const SignUp_LogIn_Layout = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#EFEEFB",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/images/bg_design.svg"
        alt="Background Design"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          top: 150,
          objectFit: "contain",
          zIndex: 1, 
        }}
      />





      <Outlet />
    </Box>
  );
};

export default SignUp_LogIn_Layout;
