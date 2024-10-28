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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function AddMembersModal({ open, toggleDrawer }) {
  const [selectedRole, setSelectedRole] = useState(null); 
  const [selectedPerformance, setSelectedPerformance] = useState(null); 
  const [dateOfJoining, setDateOfJoining] = useState(null);
  

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

  const roleOptions = [
    { value: "1", label: "Developer" },
    { value: "2", label: "Designer" },
    { value: "3", label: "Manager" },
  ];

  const reportingOptions = [
    { value: "1", label: "George" },
    { value: "2", label: "Emilie" },
    { value: "2", label: "Jack" },
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
            position: "fixed",
            top: 20,
            right: 440,
            zIndex: 1300,
            borderRadius: "50%",
            backgroundColor: "white",
            padding: 1,
            boxShadow: 2,
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <CloseIcon sx={{ fontSize: "2rem" }} />
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
          <Typography sx={{ fontFamily: "Poppins", mb: 2, fontSize: "16px" }}>
            Add member
          </Typography>
          <Divider sx={{ width: "100%", margin: 0, padding: 0 }} />

          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Name<span style={{ color: "red", marginLeft: "1px" }}>*</span>
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

          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Email<span style={{ color: "red", marginLeft: "1px" }}>*</span>
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

          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Date of joining<span style={{ color: "red", marginLeft: "1px" }}>*</span>
          </Typography>
         
          <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    value={dateOfJoining}
    onChange={(newValue) => setDateOfJoining(newValue)}
    renderInput={(params) => (
      <TextField
        {...params}
        placeholder="Select Date"
        InputLabelProps={{
          shrink: false,
        }}
        sx={{
          width: "360px",
          "& .MuiInputBase-root": {
            height: "36px",
          },
          "& .MuiInputBase-input": {
            fontFamily: "Poppins",
            fontSize: "14px",
            height: "16px",
            padding: "10px 0px", 
          },
          "& .MuiOutlinedInput-root": {
            padding: "0 10px",
            height: "36px",
            minHeight: "36px", 
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
        }}
      />
    )}
  />
</LocalizationProvider>


          {/* Department */}
          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Department
          </Typography>
          <Dropdown WorkOptions={departmentOptions} />

          {/* Designation */}
          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Designation<span style={{ color: "red", marginLeft: "1px" }}>*</span>
          </Typography>
          <Dropdown WorkOptions={designationOptions} />

          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Role<span style={{ color: "red", marginLeft: "1px" }}>*</span>
          </Typography>
          <Dropdown WorkOptions={roleOptions} />

          <Typography
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
          >
            Reporting to
          </Typography>
          <Dropdown WorkOptions={reportingOptions} />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
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
                color: "#49c792",
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
