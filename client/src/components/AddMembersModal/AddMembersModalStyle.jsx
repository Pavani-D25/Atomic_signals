const AddMemberModalStyles = {
    rootStyle: {
      padding: 0,
      // ml:"20px"
    },
    container: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      color: "#353448",
      fontSize: "17px",
      marginLeft:"20px",
      mt:'20px',
      mb:"10px",
      fontWeight:'600'
      
    },
    divider: {
      backgroundColor: "#fcfcfc",
      height: "1px",
    },
    body :{
      ml:"7px",
      mr:"20px",
    },
    subHeader :{
      color:"#484759",
      fontSize:"12px",
      mt:"12px",
      mb:"5px",
    },
    textField :{
      "& .MuiOutlinedInput-root": {
        height: "40px",
        // marginTop:"10px",
        padding:"0",
        fontSize:"14px",
        maxWidth:"480px",
      "&:hover fieldset": {
        borderColor: "#49C792",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#49C792", 
      },
        
      },
      "& .MuiOutlinedInput-input": {
        padding:"10",
        height:"40px",
        boxSizing: "border-box",
        fontSize:"14px",
        
      },
  
    }
  };
  export default AddMemberModalStyles;