




// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Checkbox,
//   TextField,
//   IconButton,
//   Button,
//   InputAdornment,
//   Divider,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import FilterIcon from "/public/images/Filter"; 
// import ImportIcon from "/public/images/importIcon";

// import FilterDrawer from "../FilterModal/FilterModal";
// import AddMembersModal from "../AddMembersModal/AddMembersModal";

// const MainScreen = () => {
//   const [filterModalOpen, setFilterModalOpen] = useState(false);
//   const [addMemberModalOpen, setAddMemberModalOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#f0f0f0",
//         display: "flex",
//         flexDirection: "column",
//         gap: "20px",
//         width: "calc(100% - 10px)",
//         height: "100vh",
//         overflow: "hidden",
//         top: 0,
//         position: "relative", // Ensure it stays within viewport
//         padding: 0, // Ensure no padding
//         margin: 0,  // Ensure no margin

//       }}
//     >
//       {/* Header and Action Row */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           backgroundColor: "#f0f0f0",
//           padding: "10px ",
//         }}
//       >
//         {/* Header */}
//         <Typography variant="h5" sx={{ color: "#333", fontFamily: "Poppins" }}>
//           Team members
//         </Typography>

//         {/* Actions: Checkbox, Search, Filter, Divider, and Buttons */}
//         <Box sx={{ display: "flex", alignItems: "center", paddingLeft: "10px", marginRight: "0px" }}>
//           {/* Show only my reportees Checkbox */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Checkbox color="success" />
//             <Typography sx={{ color: "#333", fontFamily: "Poppins", mr: "24px", fontSize: "14px", fontWeight: "500" }}>
//               Show only my reportees
//             </Typography>
//           </Box>

//           {/* Search Field */}
//           <TextField
//             variant="standard"
//             placeholder="Search by name and email"
//             InputProps={{
//               disableUnderline: true,
//               startAdornment: (
//                 <InputAdornment
//                   position="start"
//                   sx={{ color: "#9b9ea3", ml: "10px" }}
//                 >
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//               sx: {
//                 backgroundColor: "#ffffff",
//                 width: "310px",
//                 height: "40px",
//                 border: "1px solid #cecece",
//                 borderRadius: "4px",
//                 "& .MuiInputBase-input": {
//                   fontSize: "14px",
//                   color: "#333",
//                   paddingLeft: "10px",
//                   fontFamily: "Poppins",
//                 },
//               },
//             }}
//           />

//           {/* Custom Filter Icon Button */}
//           <IconButton
//             color="success"
//             sx={{
//               backgroundColor: "#49c792",
//               color: "#fff",
//               width: "40px",
//               height: "40px",
//               borderRadius: "8px",
//               "&:hover": {
//                 backgroundColor: "#42b884",
//               },
//               ml: "15px",
//             }}
//             onClick={() => setFilterModalOpen(true)} // Set filter modal to open
//           >
//             <FilterIcon style={{ width: "20px", height: "20px" }} />
//           </IconButton>

//           {/* Vertical Divider */}
//           <Divider
//             orientation="vertical"
//             flexItem
//             sx={{ height: "35px", borderColor: "#cecece", mx: "15px" }}
//           />

//           {/* Import and Add Member Buttons */}
//           <Box sx={{ display: "flex", gap: "16px" }}>
//             <Button
//               variant="outlined"
//               sx={{
//                 textTransform: "none",
//                 backgroundColor: "#f8f9fc",
//                 borderColor: "#49C792",
//                 borderWidth: "2px",
//                 "&:hover": { backgroundColor: "#42b884" },
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               onClick={() => setAddMemberModalOpen(true)} // Set add member modal to open
//             >
//               <ImportIcon style={{ width: "20px", height: "20px", color: "#fff" }} />
//               <Typography sx={{ color: "#49C792", fontFamily: "Poppins" }}>Import</Typography>
//             </Button>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#49C792",
//                 textTransform: "none",
//                 fontFamily: "Poppins",
//                 fontWeight: "300",
//                 boxShadow: "none",
//                 "&:hover": { backgroundColor: "#42b884" },
//                 marginRight: "0",
//               }}
//               onClick={() => setAddMemberModalOpen(true)} // Set add member modal to open
//             >
//               Add member
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       <FilterDrawer open={filterModalOpen} toggleDrawer={() => setFilterModalOpen(false)} /> {/* Close drawer on toggle */}
//       <AddMembersModal open={addMemberModalOpen} toggleDrawer={() => setAddMemberModalOpen(false)} />

//       {/* Placeholder for the Team Members Table Component */}
//       {/* <TeamMembersTable /> */}
//     </Box>
//   );
// };

// export default MainScreen;



// MainScreen.jsx

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  TextField,
  IconButton,
  Button,
  InputAdornment,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "/public/images/Filter"; 
import ImportIcon from "/public/images/importIcon";

import FilterDrawer from "../FilterModal/FilterModal";
import AddMembersModal from "../AddMembersModal/AddMembersModal";
import styles from "./MainScreen.styles";
import TeamTable from "../TeamTable/TeamTable";

const MainScreen = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [addMemberModalOpen, setAddMemberModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box sx={styles.container}>
      {/* Header and Action Row */}
      <Box sx={styles.header}>
        {/* Header */}
        <Typography variant="h5" sx={{ color: "#333", fontFamily: "Poppins",      
 }}>
          Team members
        </Typography>

        {/* Actions: Checkbox, Search, Filter, Divider, and Buttons */}
        <Box sx={styles.actionBox}>
          {/* Show only my reportees Checkbox */}
          <Box sx={styles.checkboxBox}>
            <Checkbox color="success" />
            <Typography sx={{ color: "#333", fontFamily: "Poppins", mr: "24px", fontSize: "14px", fontWeight: "500" }}>
              Show only my reportees
            </Typography>
          </Box>

          {/* Search Field */}
          <TextField
            variant="standard"
            placeholder="Search by name and email"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ color: "#9b9ea3", ml: "10px" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: styles.searchField,
            }}
          />

          {/* Custom Filter Icon Button */}
          <IconButton
            color="success"
            sx={styles.filterIconButton}
            onClick={() => setFilterModalOpen(true)} // Set filter modal to open
          >
            <FilterIcon style={{ width: "20px", height: "20px" }} />
          </IconButton>

          {/* Vertical Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "35px", borderColor: "#cecece", mx: "15px" }}
          />

          {/* Import and Add Member Buttons */}
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button
              variant="outlined"
              sx={styles.importButton}
              onClick={() => setAddMemberModalOpen(true)} // Set add member modal to open
            >
              <ImportIcon style={{ width: "20px", height: "20px", color: "#fff" }} />
              <Typography sx={{ color: "#49C792", fontFamily: "Poppins" }}>Import</Typography>
            </Button>
            <Button
              variant="contained"
              sx={styles.addMemberButton}
              onClick={() => setAddMemberModalOpen(true)} // Set add member modal to open
            >
              Add member
            </Button>
          </Box>
        </Box>
      </Box>

      <FilterDrawer open={filterModalOpen} toggleDrawer={() => setFilterModalOpen(false)} /> {/* Close drawer on toggle */}
      <AddMembersModal open={addMemberModalOpen} toggleDrawer={() => setAddMemberModalOpen(false)} />

    <TeamTable/>  
    </Box>
  );
};

export default MainScreen;
