import React from "react";
import Box from '@mui/material/Box';
import FadeInComponent from "./FadeComponent";

export default function ContactPage() {
    return (
        <Box sx={{
            width: '100%',
        }}>
            <FadeInComponent text="Contact Info" textColor="#fff"></FadeInComponent>
        </Box>
    )
}