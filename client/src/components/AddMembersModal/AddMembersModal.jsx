// import React, { useState } from "react";
// import {
//   Drawer,
//   Typography,
//   Button,
//   IconButton,
//   TextField,
//   Box,
//   Divider,
// } from "@mui/material";
// import CloseIcon from "../../../public/images/closeIcon"; 
// import Dropdown from "../Dropdown/Dropdown"; 
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function AddMembersModal({ open, toggleDrawer }) {
//   const [selectedRole, setSelectedRole] = useState(null); 
//   const [selectedPerformance, setSelectedPerformance] = useState(null); 
//   const [dateOfJoining, setDateOfJoining] = useState(null);
  

//   const departmentOptions = [
//     { value: "1", label: "Engineering" },
//     { value: "2", label: "Marketing" },
//     { value: "3", label: "Sales" },
//   ];

//   const designationOptions = [
//     { value: "1", label: "Junior" },
//     { value: "2", label: "Senior" },
//     { value: "3", label: "Lead" },
//   ];

//   const roleOptions = [
//     { value: "1", label: "Developer" },
//     { value: "2", label: "Designer" },
//     { value: "3", label: "Manager" },
//   ];

//   const reportingOptions = [
//     { value: "1", label: "George" },
//     { value: "2", label: "Emilie" },
//     { value: "2", label: "Jack" },
//   ];

//   const handleRoleClick = (role) => {
//     setSelectedRole(role); 
//   };

//   const handlePerformanceClick = (performance) => {
//     setSelectedPerformance(performance); 
//   };

//   return (
//     <>
      

//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={toggleDrawer}
//         disableScrollLock
//         PaperProps={{ sx: { width: 420 } }}
//       >
//         <Box
//           sx={{
//             position: "fixed",
//             top: 20,
//             right: 440,
//             zIndex: 1300,
//             borderRadius: "50%",
//             backgroundColor: "white",
//             padding: 1,
//             boxShadow: 2,
//           }}
//         >
//           <IconButton onClick={toggleDrawer}>
//             <CloseIcon sx={{ fontSize: "2rem" }} />
//           </IconButton>
//         </Box>

//         <Box
//           sx={{
//             p: 3,
//             overflowY: "auto",
//             "&::-webkit-scrollbar": {
//               width: "6px",
//             },
//             "&::-webkit-scrollbar-thumb": {
//               backgroundColor: "#ccc",
//               borderRadius: "4px",
//             },
//             "&::-webkit-scrollbar-thumb:hover": {
//               backgroundColor: "#b3b3b3",
//             },
//           }}
//         >
//           <Typography sx={{ fontFamily: "Poppins", mb: 2, fontSize: "16px" }}>
//             Add member
//           </Typography>
//           <Divider sx={{ width: "100%", margin: 0, padding: 0 }} />

//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Name<span style={{ color: "red", marginLeft: "1px" }}>*</span>
//           </Typography>
//           <TextField
//             type="email"
//             required
//             defaultValue="atomicsignals@gmail.com"
//             sx={{
//               width: 360,
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

//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Email<span style={{ color: "red", marginLeft: "1px" }}>*</span>
//           </Typography>
//           <TextField
//             type="email"
//             required
//             defaultValue="atomicsignals@gmail.com"
//             sx={{
//               width: 360,
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

//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Date of joining<span style={{ color: "red", marginLeft: "1px" }}>*</span>
//           </Typography>
         
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//   <DatePicker
//     value={dateOfJoining}
//     onChange={(newValue) => setDateOfJoining(newValue)}
//     renderInput={(params) => (
//       <TextField
//         {...params}
//         placeholder="Select Date"
//         InputLabelProps={{
//           shrink: false,
//         }}
//         sx={{
//           width: "360px",
//           "& .MuiInputBase-root": {
//             height: "36px",
//           },
//           "& .MuiInputBase-input": {
//             fontFamily: "Poppins",
//             fontSize: "14px",
//             height: "16px",
//             padding: "10px 0px", 
//           },
//           "& .MuiOutlinedInput-root": {
//             padding: "0 10px",
//             height: "36px",
//             minHeight: "36px", 
//             "& fieldset": {
//               borderColor: "#e0e0e0",
//             },
//             "&:hover fieldset": {
//               borderColor: "#d3d3d3",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#d3d3d3",
//             },
//           },
//         }}
//       />
//     )}
//   />
// </LocalizationProvider>


//           {/* Department */}
//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Department
//           </Typography>
//           <Dropdown WorkOptions={departmentOptions} />

//           {/* Designation */}
//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Designation<span style={{ color: "red", marginLeft: "1px" }}>*</span>
//           </Typography>
//           <Dropdown WorkOptions={designationOptions} />

//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Role<span style={{ color: "red", marginLeft: "1px" }}>*</span>
//           </Typography>
//           <Dropdown WorkOptions={roleOptions} />

//           <Typography
//             sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}
//           >
//             Reporting to
//           </Typography>
//           <Dropdown WorkOptions={reportingOptions} />

//           <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
//             <Button
//               variant="contained"
//               sx={{
//                 textTransform: "none",
//                 fontFamily: "Poppins",
//                 width: "175px",
//                 backgroundColor: "#49c792",
//                 boxShadow: "none",
//               }}
//             >
//               Apply Memeber
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{
//                 textTransform: "none",
//                 fontFamily: "Poppins",
//                 width: "175px",
//                 borderColor: "#49c792",
//                 color: "#49c792",
//               }}
//             >
//               Reset
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }






// // import * as React from 'react';
// // import { Typography, Box, Divider, Button, TextField, MenuItem, Select } from '@mui/material';
// // import Drawer from '@mui/material/Drawer';
// // import { ExpandMore } from '@mui/icons-material';

// // import AddMemberModalStyles from './AddMembersModalStyle'; 
// // const AddMemberModal = ({ open, onClose, onAddMember }) => {
// //   const [memberData, setMemberData] = React.useState({
// //     name: '',
// //     email: '',
// //     dateOfJoining: '',
// //     department: '',
// //     designation: '',
// //     role: '',
// //     reportingTo: '',
// //     status: 'Active', 
// //   });

// //   // State to hold all added members
// //   const [addedMembers, setAddedMembers] = React.useState([]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setMemberData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //     console.log(value);
// //   };

// //   const handleAddMember = () => {
// //     if (onAddMember) {
// //       // Add the new member to the array
// //       const newMember = { ...memberData };
// //       const updatedMembers = [...addedMembers, newMember]; // Create a new array with the added member

// //       setAddedMembers(updatedMembers); // Update the added members state

// //       // Log the updated array of added members
// //       console.log(updatedMembers);

// //       onAddMember(newMember);
// //       setMemberData({ name: '', email: '', dateOfJoining: '', department: '', designation: '', role: '', reportingTo: '', status: 'Active' });
// //       onClose();
// //     }
// //   };

// //   return (
// //     <Drawer anchor="right" open={open} onClose={onClose}>
// //       <Box sx={{ width: 370, backgroundColor: "white" }}>
// //         <Box sx={AddMemberModalStyles.rootStyle}>
// //           <Box sx={{ ...AddMemberModalStyles.headerContainer, padding: '1px 0' }}>
// //             <Typography sx={AddMemberModalStyles.header}>Add Member</Typography>
// //             <Divider sx={AddMemberModalStyles.divider} />
// //           </Box>
// //           <Box sx={AddMemberModalStyles.container}>
// //             <Box sx={AddMemberModalStyles.body}>
// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Name</Typography>
// //                 <TextField
// //                   type="text"
// //                   name="name"
// //                   placeholder="Name"
// //                   value={memberData.name}
// //                   onChange={handleInputChange}
// //                   sx={AddMemberModalStyles.textField}
// //                   fullWidth
// //                 />
// //               </Box>

// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Email</Typography>
// //                 <TextField
// //                   type="email"
// //                   name="email"
// //                   placeholder="Email"
// //                   value={memberData.email}
// //                   onChange={handleInputChange}
// //                   sx={AddMemberModalStyles.textField}
// //                   fullWidth
// //                 />
// //               </Box>

// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Date of Joining</Typography>
// //                 <TextField
// //                   type="date"
// //                   name="dateOfJoining"
// //                   value={memberData.dateOfJoining}
// //                   onChange={handleInputChange}
// //                   sx={AddMemberModalStyles.textField}
// //                   InputLabelProps={{ shrink: true }}
// //                   fullWidth
// //                 />
// //               </Box>

// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Department</Typography>
// //                 <TextField
// //                   type="text"
// //                   name="department"
// //                   placeholder="Department"
// //                   value={memberData.department}
// //                   onChange={handleInputChange}
// //                   sx={AddMemberModalStyles.textField}
// //                   fullWidth
// //                 />
// //               </Box>

// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Designation</Typography>
// //                 <Select
// //                   name="designation"
// //                   value={memberData.designation}
// //                   onChange={handleInputChange}
// //                   IconComponent={ExpandMore}
// //                   displayEmpty
// //                   sx={{ height: "38px", fontSize: "14px", backgroundColor: "#FFFFFF", width: '100%' }}
// //                 >
// //                   <MenuItem value="" disabled>Select</MenuItem>
// //                   <MenuItem value="Visual Designer">Visual Designer</MenuItem>
// //                   <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
// //                   <MenuItem value="Digital Marketer">Digital Marketer</MenuItem>
// //                 </Select>
// //               </Box>

// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Role</Typography>
// //                 <Select
// //                   name="role"
// //                   value={memberData.role}
// //                   onChange={handleInputChange}
// //                   IconComponent={ExpandMore}
// //                   displayEmpty
// //                   sx={{ height: "38px", fontSize: "14px", backgroundColor: "#FFFFFF", width: '100%' }}
// //                 >
// //                   <MenuItem value="" disabled>Select</MenuItem>
// //                   <MenuItem value="Manager">Manager</MenuItem>
// //                   <MenuItem value="Employee">Employee</MenuItem>
// //                   <MenuItem value="Admin">Admin</MenuItem>
// //                 </Select>
// //               </Box>

// //               <Box sx={{ ml: "20px", mt: "8px", mb: "5px" }}>
// //                 <Typography sx={AddMemberModalStyles.subHeader}>Reporting to</Typography>
// //                 <Select
// //                   name="reportingTo"
// //                   value={memberData.reportingTo}
// //                   onChange={handleInputChange}
// //                   IconComponent={ExpandMore}
// //                   displayEmpty
// //                   sx={{ height: "38px", fontSize: "14px", backgroundColor: "#FFFFFF", width: '100%' }}
// //                 >
// //                   <MenuItem value="" disabled>Select</MenuItem>
// //                   <MenuItem value="Steven">Steven</MenuItem>
// //                   <MenuItem value="Alicia Dsouza">Alicia Dsouza</MenuItem>
// //                   <MenuItem value="Cheng Shan">Cheng Shan</MenuItem>
// //                 </Select>
// //               </Box>
// //             </Box>

// //             <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '17px', gap: "10px" ,marginTop:'4rem'}}>
// //               <Button variant="contained" onClick={handleAddMember} sx={{ width: "50%", color: '#FFFFFF', textTransform:'none' }}>Add Member</Button>
// //               <Button variant="outlined" onClick={onClose} sx={{ width: "50%",textTransform:'none' }}>Cancel</Button>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Drawer>
// //   );
// // };

// // export default AddMemberModal;


















































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

export default function AddMembersModal({ open, toggleDrawer, addMember }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedReporting, setSelectedReporting] = useState(null);

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
    { value: "3", label: "Jack" },
  ];

  const handleAddMember = () => {
    if (name && email && dateOfJoining) {
      const newMember = {
        name,
        email,
        dateOfJoining,
        department: selectedDepartment,
        designation: selectedDesignation,
        role: selectedRole,
        reporting: selectedReporting,
      };
      addMember(newMember); // Call the function passed via props to add the new member
      resetForm(); // Optionally reset the form
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setDateOfJoining(null);
    setSelectedDepartment(null);
    setSelectedDesignation(null);
    setSelectedRole(null);
    setSelectedReporting(null);
  };

  return (
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

        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
          Name<span style={{ color: "red", marginLeft: "1px" }}>*</span>
        </Typography>
        <TextField
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
          Email<span style={{ color: "red", marginLeft: "1px" }}>*</span>
        </Typography>
        <TextField
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
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
        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
          Department
        </Typography>
        <Dropdown WorkOptions={departmentOptions} selectedOption={selectedDepartment} onSelect={setSelectedDepartment} />

        {/* Designation */}
        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
          Designation<span style={{ color: "red", marginLeft: "1px" }}>*</span>
        </Typography>
        <Dropdown WorkOptions={designationOptions} selectedOption={selectedDesignation} onSelect={setSelectedDesignation} />

        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
          Role<span style={{ color: "red", marginLeft: "1px" }}>*</span>
        </Typography>
        <Dropdown WorkOptions={roleOptions} selectedOption={selectedRole} onSelect={setSelectedRole} />

        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "12px", mb: 1 }}>
          Reporting to
        </Typography>
        <Dropdown WorkOptions={reportingOptions} selectedOption={selectedReporting} onSelect={setSelectedReporting} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleAddMember}
            sx={{
              textTransform: "none",
              fontFamily: "Poppins",
              width: "175px",
              backgroundColor: "#49c792",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#44b285",
              },
            }}
          >
            Add Member
          </Button>
          <Button
            variant="outlined"
            onClick={toggleDrawer}
            sx={{
              textTransform: "none",
              fontFamily: "Poppins",
              width: "175px",
              borderColor: "#49c792",
              color: "#49c792",
              "&:hover": {
                borderColor: "#44b285",
                color: "#44b285",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
