import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SpeedMeter from "../SpeedMeter/SpeedMeter";
import ToggleSwitch from "../switch/Switch";
import Pencil from "../../../public/images/pencil";
import EditMembersModal from "../EditMembersModal/EditMembersModal";
const TeamTable = () => {
  const [editMemberModalOpen, seteditMemberModalOpen] = useState(false);

  const initialTeamMembers = [
    {
      id: 1,
      name: "George Fernandes",
      designation: "Visual Designer",
      department: "Design",
      signals: ["C", "E", "T", "D", "U"],
      performance: 3,
      role: "Developer",
      experience: "3 yrs 4 months",
      reportsTo: "Manager Name",
      email: "george@example.com",
      status: "active",
    },
    {
      id: 2,
      name: "Sara Adams",
      designation: "UI Developer",
      department: "Engineering",
      signals: ["A", "B", "F", "G"],
      performance: 4,
      role: "Developer",
      experience: "3 yrs 4 months",
      email: "sara@example.com",
      status: "inactive",
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "Product Manager",
      department: "Product",
      signals: ["P", "L", "K", "M"],
      performance: 5,
      experience: "3 yrs 4 months",
      reportsTo: "Manager C",
      role: "Designer",
      email: "michael@example.com",
      status: "active",
    },
  ];

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const handleEditMemberClick = (member) => {
    console.log("Edit clicked for", member);
  };

  const handleToggleStatus = (id) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id
          ? {
              ...member,
              status: member.status === "active" ? "inactive" : "active",
            }
          : member
      )
    );
  };

  const generateColor = (index) => {
    const colors = [
      "#3f51b5",
      "#f50057",
      "#4caf50",
      "#ff9800",
      "#2196f3",
      "#9c27b0",
      "#ffeb3b",
      "#ff5722",
      "#795548",
      "#607d8b",
    ];
    return colors[index % colors.length];
  };

  const renderAvatar = (src, name) => (
    <Avatar
      sx={{ width: "2.5rem", height: "2.5rem" }}
      alt={name}
      src={src || "fallback_image_url_here"}
    />
  );

  return (
    <Box
      p={1}
      marginRight={1}
      marginLeft={2}
      display="flex"
      position="relative"
      sx={{
        pr: 0,
        backgroundColor: "#fff",
        height: "595px",
        borderRadius: "10px",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: "60vh",
          overflowX: "auto",
          flexGrow: 1,
          msScrollbarWidth: "none",
          scrollbarWidth: "none",
        }}
      >
        <Table
          sx={{
            minWidth: 1400,
            msScrollbarWidth: "none",
            scrollbarWidth: "none",
            fontFamily: "Poppins",
          }}
          aria-label="team members table"
        >
          <TableHead>
            <TableRow>
              {[
                "Name",
                "Designation",
                "Department",
                "Signals",
                "Overall Performance",
                "Reports To",
                "Role",
                "Email",
                "Experience",
                "Status",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontFamily: "Poppins",
                    minWidth: 120,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow
                key={member.id}
                sx={{
                  backgroundColor:
                    member.status === "inactive"
                      ? "transparent"
                      : "transparent",
                }}
              >
                <TableCell sx={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {renderAvatar(
                      "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      member.name
                    )}
                    <Typography noWrap sx={{ fontFamily: "Poppins" }}>
                      {member.name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", minWidth: 120 }}>
                  {member.designation}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", minWidth: 120 }}>
                  {member.department}
                </TableCell>

                <TableCell sx={{ fontFamily: "Poppins", minWidth: 120 }}>
                  <Stack direction="row" spacing={1}>
                    {member.signals.map((signal, index) => (
                      <Avatar
                        key={index}
                        sx={{
                          bgcolor: generateColor(index),
                          width: 24,
                          height: 24,
                          fontSize: "0.7rem",
                        }}
                      >
                        <Typography variant="caption" color="white">
                          {signal}
                        </Typography>
                      </Avatar>
                    ))}
                  </Stack>
                </TableCell>

                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    pl: "5%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SpeedMeter value={member.performance * 20} />
                </TableCell>

                <TableCell sx={{ fontFamily: "Poppins", minWidth: 110 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {renderAvatar(
                      "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      member.name
                    )}
                    <Typography noWrap sx={{ fontFamily: "Poppins" }}>
                      {member.name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", minWidth: 110 }}>
                  {member.role}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", minWidth: 110 }}>
                  {member.email}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", minWidth: 110 }}>
                  {member.experience}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", minWidth: 110 }}>
                  <ToggleSwitch
                    checked={member.status === "active"}
                    onChange={() => handleToggleStatus(member.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          width: 200,
          position: "sticky",
          justifyContent: "end",
          display: "flex",
          backgroundColor: "transparent",
          overflowX: "hidden",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: "150%",
            backgroundColor: "transparent",
            width: "100%",
          }}
        >
          <Table
            aria-label="actions table"
            sx={{ backgroundColor: "transparent", tableLayout: "fixed" }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontFamily: "Poppins", borderLeft: "1px solid #ccc" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell
                    align="end"
                    sx={{ height: "45.6px", borderLeft: "1px solid #ccc" }}
                  >
                    <Stack
                      direction="row"
                      spacing={0}
                      sx={{ justifyContent: "end" }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          fontFamily: "Poppins",
                          backgroundColor: "#49c792",
                          width: "107px",
                          boxShadow: "none",
                          fontSize: "11px",
                          height: "30px",
                          mt: "7px",
                          fontWeight: "300",
                          whiteSpace: "nowrap", // Ensure text stays on a single line
                        }}
                      >
                        Add feedback
                      </Button>

                      <IconButton onClick={() => seteditMemberModalOpen(true)}>
                        <Avatar
                          sx={{ bgcolor: "#eefbf6", width: 30, height: 30 }}
                        >
                          <Pencil sx={{ width: 18, height: 18 }} />
                        </Avatar>
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <EditMembersModal
        open={editMemberModalOpen}
        toggleDrawer={() => seteditMemberModalOpen(false)}
      />
    </Box>
  );
};

export default TeamTable;
