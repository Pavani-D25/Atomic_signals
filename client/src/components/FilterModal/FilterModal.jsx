





import React, { useState } from "react";
import {
  Drawer,
  Typography,
  Button,
  IconButton,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "../../../public/images/closeIcon"; 
import Dropdown from "../Dropdown/Dropdown"; 

export default function FilterDrawer({ open, toggleDrawer }) {
  const [selectedRole, setSelectedRole] = useState(null); 
  const [selectedPerformance, setSelectedPerformance] = useState(null); 

 

  const departmentOptions = [
    { value: "1", label: "Engineering" },
    { value: "2", label: "Marketing" },
    { value: "3", label: "Sales" },
  ];

  const designationOptions = [
    { value: "1", label: "Junior" },
    { value: "2", label: "Senior" },
    { value: "3", label: "Lead" },
  ];

  const handleRoleClick = (role) => {
    setSelectedRole(role); 
  };

  const handlePerformanceClick = (performance) => {
    setSelectedPerformance(performance); 
  };

  return (
    <>
     

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        disableScrollLock
        PaperProps={{ sx: { width: 420 } }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 440,
            zIndex: 1300,
            borderRadius: '50%',
            backgroundColor: 'white',
            padding: 1,
            boxShadow: 2,
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <CloseIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            p: 3,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b3b3b3",
            },
          }}
        >
        
          <Typography  sx={{ fontFamily: "Poppins", mb: 2, fontSize: "16px" }}>
          Filters          </Typography>
          <Divider sx={{ width: '100%', margin: 0, padding: 0 }} />

          <Typography sx={{ mt: 3, fontFamily: "Poppins", fontSize: "12px" }}>
            Overall performance
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
            {["Impactful", "Spectacular", "Very good", "Good", "Need to improve", "Need to improve a lot", "Completely away"].map((label) => (
              <Button
                variant="outlined"
                key={label}
                onClick={() => handlePerformanceClick(label)} 
                sx={{
                  textTransform: "none",
                  background: selectedPerformance === label ? "#EEFBF6" : "#fff", 
                  color: "black",
                  borderColor: selectedPerformance === label ? "#49c792" : "#EBEBEB", 
                  fontFamily: "Poppins",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: selectedPerformance === label ? "#EEFBF6" : "#f5f5f5", 
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Department */}
          <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
            Department
          </Typography>
          <Dropdown WorkOptions={departmentOptions} />

          {/* Designation */}
          <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
            Designation
          </Typography>
          <Dropdown WorkOptions={designationOptions} />

          {/* Reporting to */}
          <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
            Reporting to
          </Typography>
          <TextField
            type="email"
            required
            defaultValue="atomicsignals@gmail.com"
            sx={{
              width: 360,
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

          {/* Role */}
          <Typography variant="subtitle1" sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px" }}>
            Role
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {["Employee", "Manager", "Admin"].map((role) => (
              <Button
                key={role}
                variant="outlined"
                onClick={() => handleRoleClick(role)}
                sx={{
                  textTransform: "none",
                  fontFamily: "Poppins",
                  background: selectedRole === role ? "#EEFBF6" : "#fff", 
                  color: "black",
                  borderColor: selectedRole === role ? "#49c792" : "#EBEBEB", 
                  "&:hover": {
                    backgroundColor: selectedRole === role ? "#EEFBF6" : "#f5f5f5", 
                  },
                }}
              >
                {role}
              </Button>
            ))}
          </Box>

          {/* Buttons for applying filter and resetting */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 11 }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontFamily: "Poppins",
                width: "175px",
                backgroundColor: "#49c792",
                boxShadow: "none",
               
              }}
            >
             Apply Filter
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontFamily: "Poppins",
                width: "175px",
                borderColor: "#49c792",
                color: "#49c792"
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
