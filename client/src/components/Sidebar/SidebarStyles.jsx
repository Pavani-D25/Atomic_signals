import { responsiveFontSizes } from "@mui/material";

const sidebarStyles = {
  container: {
    width: "72px",
    height: "100vh",
    backgroundColor: "#1A125D",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    gap: "20px",
    position: "fixed",
    top: 0,
    left: 0,
        color: "#B1A9F1",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)", 

  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  divider: {
    width: "50%",
    height: "0.5px",
    backgroundColor: "#ffff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
   
    
    
  },
  button: (active) => ({
    backgroundColor: active ? "#49c792" : "#30287e",
    color: "#B1A9F1",
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: active ? "#49c792" : "#3b3f8f",
    },
  }),
  marginTop: {
    marginTop: "205px",
  },
};

export default sidebarStyles;
