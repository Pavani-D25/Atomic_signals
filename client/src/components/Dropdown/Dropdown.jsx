import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; 

const Dropdown = ({ WorkOptions }) => {
    const [option, setOption] = React.useState('1');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div>
            <FormControl>
                <Select
                    id="demo-simple-select"
                    value={option}
                    onChange={handleChange}
                    IconComponent={(props) => (
                        <KeyboardArrowDownIcon {...props} sx={{ fontSize: '20px', color: 'gray' }} />
                    )}
                    sx={{
                        height: 40,
                        width: "360px",
                        fontSize: '14px',
                        color: 'black',
                        fontFamily: "Poppins",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#EBEBEB",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#b3b3b3",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#b3b3b3",
                        }
                    }}
                >
                    {WorkOptions.map((option) => (
                        <MenuItem
                            style={{
                                padding: '0.5rem',
                                fontSize: '14px',
                                
                                color: 'black',
                                
                                boxShadow: 'none',
                            }}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;
