import React from "react";
import Box from '@mui/material/Box';
import FadeInComponent from "./FadeComponent";

export default function WorkPage() {
    return (
        <Box sx={{
            width: '100%',
        }}>
            <FadeInComponent text="Recent Work" textColor="#fff"></FadeInComponent>
        </Box>
    )
}