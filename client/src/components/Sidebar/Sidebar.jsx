
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Logout from "/public/images/Logout"; // Adjust the path based on your folder structure
import Notification from "/public/images/Notification";
import Settings from "/public/images/Settings";
import Feedback from "/public/images/Feedback";
import Team from "/public/images/Team";
import Profile from "/public/images/Profile";
import sidebarStyles from "./SidebarStyles";  

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttons = [
    { name: "Profile", Icon: Profile },
    { name: "Team", Icon: Team },
    { name: "Feedback", Icon: Feedback },
    { name: "Settings", Icon: Settings },
    { name: "Notification", Icon: Notification },
    { name: "Logout", Icon: Logout },
  ];

  return (
    <Box sx={sidebarStyles.container}>
      <Box sx={sidebarStyles.logoContainer}>
        <img
          src="/public/images/logo-sidebar.svg"
          alt="Logo"
          style={{ width: "24px", height: "24px" }}
        />
        <Typography fontFamily={"Josefin Sans"} fontWeight={300} color="white">
          V 1.0.02
        </Typography>
      </Box>

      <Box sx={sidebarStyles.divider} />

      <Box sx={sidebarStyles.buttonContainer}>
        {buttons.slice(0, 3).map((button) => (
          <Box key={button.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              onClick={() => handleButtonClick(button.name)}
              sx={sidebarStyles.button(activeButton === button.name)}
            >
              <button.Icon style={{ width: "16px", height: "20px" }} />
            </IconButton>
            <Typography sx={{fontFamily: "Poppins",fontSize:'12px'}} color="white">{button.name}</Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          ...sidebarStyles.buttonContainer,
          ...sidebarStyles.marginTop,
        }}
      >
        {buttons.slice(3).map((button) => (
          <IconButton
            key={button.name}
            onClick={() => handleButtonClick(button.name)}
            sx={sidebarStyles.button(activeButton === button.name)}
          >
            <button.Icon style={{ width: "20px", height: "20px" }} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
