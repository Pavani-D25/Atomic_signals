// MainScreenStyles.jsx

const styles = {
    container: {
      backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "calc(100% - 12px)",
      height: "100vh",
      overflow: "hidden",
      top: 0,
      position: "relative",
      padding: 0,
      margin: 0,
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f0f0f0",
      padding: "10px",
    },
    actionBox: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "10px",
      marginRight: "0px",
    },
    checkboxBox: {
      display: "flex",
      alignItems: "center",
    },
    searchField: {
      backgroundColor: "#ffffff",
      width: "310px",
      height: "40px",
      border: "1px solid #cecece",
      borderRadius: "4px",
    },
    filterIconButton: {
      backgroundColor: "#49c792",
      color: "#fff",
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#42b884",
      },
      ml: "15px",
    },
    importButton: {
      textTransform: "none",
      backgroundColor: "#f8f9fc",
      borderColor: "#49C792",
      borderWidth: "2px",
      "&:hover": { backgroundColor: "#42b884" },
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    addMemberButton: {
      backgroundColor: "#49C792",
      textTransform: "none",
      fontFamily: "Poppins",
      fontWeight: "300",
      boxShadow: "none",
      "&:hover": { backgroundColor: "#42b884" },
      marginRight: "0",
    },
  };
  
  export default styles;
  