import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import MainScreen from "../components/MainScreen/MainScreen";

const MainScreenLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Sidebar Section */}
      <Box
        sx={{
          width: "72px",
          height: "100vh",
          backgroundColor: "#333", 
          boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)", 
          position: "fixed", 
          top: 0,
          left: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          marginLeft: "72px", 
          width: "calc(100% - 72px)",
        }}
      >
        <MainScreen />
      </Box>
    </Box>
  );
};

export default MainScreenLayout;
