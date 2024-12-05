import React from "react";
import Box from '@mui/material/Box';
import FadeInComponent from "./FadeComponent";
import { useTheme } from '@mui/material/styles';

export default function WorkPage() {
    const theme = useTheme();
    return (
        <Box sx={{
            width: '100%',
        }}>
            <FadeInComponent text="Recent Work" textColor={`${theme.palette.primary.main}`}></FadeInComponent>
        </Box>
    )
}