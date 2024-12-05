import React from "react";
import Box from '@mui/material/Box';
import FadeInComponent from "./FadeComponent";
import { useTheme } from '@mui/material/styles';

export default function ContactPage() {
    const theme = useTheme();
    return (
        <Box sx={{
            width: '100%',
        }}>
            <FadeInComponent text="Contact Info" textColor={`${theme.palette.primary.main}`}></FadeInComponent>
        </Box>
    )
}