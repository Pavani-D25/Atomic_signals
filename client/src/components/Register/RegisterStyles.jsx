// RegisterStyles.jsx
const registerStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "#f5f7fb",
    zIndex: 1000,
    borderRadius: 3,

  },
  paper: {
    padding: 4,
    borderRadius: 3,
    textAlign: "center",
    width: "350px",
  },
  logoContainer: {
    marginBottom: 1,
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexDirection: "row",
  },
  logo: {
    width: "30px",
    height: "29px",
    marginBottom: "8px",
  },
  logoText: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "600",
    color: "#665cd7",
    marginLeft: 1,
    textAlign: "left",
  },
  signUpTextContainer: {
    marginBottom: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  signUpText: {
    fontFamily: "Poppins",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  signUpDescription: {
    color: "#8c8b96",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "400",
    textAlign: 'left',
    marginBottom: "4px",

    
  },
  button: {
    width: "352px",
    textTransform: "none",
    display: "flex",
    paddingLeft: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "Poppins",
    backgroundColor: "#f8f8f8",
    marginBottom: "16px",
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    fontSize: "14px",
    color: "#353448",
  },
  divider: {
    marginY: 2,
    marginTop: "24.38px",
    fontFamily: "Poppins",
    color: "#8c8b96",
    fontSize: "12px",
    fontWeight: "500",
    "&:before, &:after": {
      borderColor: "#f8f8f8",
      borderWidth: "2.2px",
    },
    paddingX: 5,
    textAlign: "center",
  },
  emailInputContainer: {
    marginBottom: 2,
  },
  emailLabel: {
    marginBottom: "8px",
    display: "flex",
    fontFamily: "Poppins",
    fontSize: "12px",
    marginTop: "24.62px",
    color: "#585768",
    fontWeight: "500",
  },
  emailInput: {
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
  },
  signUpButton: {
    textTransform: "none",
    marginBottom: 2,
    fontFamily: "Poppins",
    backgroundColor: "#58b89c",
    color: "white",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#6cdbad",
      boxShadow: "none",
    },
  },
  logInText: {
    color: "textSecondary",
    fontFamily: "Poppins",
    marginTop: "6px",
    fontSize: "14px",
  },
  logInLink: {
    color: "#353448",
    fontFamily: "Poppins",
    fontWeight: "600",
  },
};

export default registerStyles;
