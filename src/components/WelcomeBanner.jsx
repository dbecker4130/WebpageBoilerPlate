import React from "react";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';


const WelcomeBanner = ({ text, textColor }) => {
    return (
        <Box sx={{
            width: '100%',
            border: '1px solid blue'
            }}>
            <h1 style={{ 
                color: textColor,
                }}>{ text }</h1>
        </Box>
    )
}

WelcomeBanner.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
  };
  

export default WelcomeBanner;
