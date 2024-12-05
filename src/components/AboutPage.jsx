import React, { useRef } from "react";
import { Button, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FadeInComponent from "./FadeComponent";
import { useTheme } from '@mui/material/styles';

export default function AboutPage() {
    const theme = useTheme();

    const childRef = useRef(null);

    const sendToBottom = () => {
        if (childRef.current) {
            childRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <Box className="about-page" sx={{ textAlign: 'center' }}>
        
                    <FadeInComponent text="About Me" textColor={`${theme.palette.primary.main}`}></FadeInComponent>
    
                    <Button onClick={sendToBottom} sx={{ color: `${theme.palette.primary.main}`, border: `1px solid ${theme.palette.primary.main}`, textAlign: 'center', marginBottom: '30px' }}>
                        <KeyboardDoubleArrowDownIcon sx={{ width: '100px' }} />
                    </Button>
                
                    <Box sx={{ height: '2000px', border: `1px solid ${theme.palette.secondary.main}` }}>
                        CONTENT
                    </Box>
                <div ref={childRef}></div>
            </Box>
        </>

    )
}