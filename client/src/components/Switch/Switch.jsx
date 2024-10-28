// import React from "react";
// import { styled } from "@mui/material";

// const ToggleSwitch = ({ onChange, checked }) => {
//   return (
//     <ToggleContainer>
//       <Input type="checkbox" onChange={onChange} checked={checked} />
//       <Slider checked={checked} />
//     </ToggleContainer>
//   );
// };

// const ToggleContainer = styled("label")({
//   display: "inline-flex",
//   alignItems: "center",
//   position: "relative",
//   cursor: "pointer",
// });

// const Input = styled("input")({
//   display: "none",
// });

// const Slider = styled("span")(({ checked }) => ({
//   width: "34px",
//   height: "20px",
//   backgroundColor: checked ? "#2196F3" : "#ccc",
//   borderRadius: "34px",
//   position: "relative",
//   transition: ".4s",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     width: "16px",
//     height: "16px",
//     left: checked ? "18px" : "2px",
//     bottom: "2px",
//     backgroundColor: "white",
//     borderRadius: "50%",
//     transition: ".4s",
//   },
// }));

// export default ToggleSwitch;




import React, { useState } from "react";
import { styled } from "@mui/material";

const ToggleSwitch = ({ onChange, checked }) => {
  // Handle the change event to toggle the state
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <ToggleContainer onClick={handleChange}>
      <Input type="checkbox" onChange={handleChange} checked={checked} />
      <Slider checked={checked} />
    </ToggleContainer>
  );
};

const ToggleContainer = styled("label")({
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",
});

const Input = styled("input")({
  display: "none",
});

const Slider = styled("span")(({ checked }) => ({
  width: "34px",
  height: "20px",
  backgroundColor: checked ? "#49c792" : "#ccc",
  paddingRight: "2px",
  borderRadius: "34px",
  position: "relative",
  transition: ".4s",
  "&:before": {
    content: '""',
    position: "absolute",
    width: "16px",
    height: "16px",
    left: checked ? "18px" : "2px",
    bottom: "2px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: ".4s",
  },
}));

export default ToggleSwitch;
