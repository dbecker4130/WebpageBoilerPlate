import React, { useRef } from "react";
import { Button, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FadeInComponent from "./FadeComponent";
import './AboutPage.css';

export default function AboutPage() {

    const childRef = useRef(null);

    const sendToBottom = () => {
        if (childRef.current) {
            childRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Box className="about-page">
            <Box>
                <FadeInComponent text="About Me" textColor="#fff"></FadeInComponent>
                <Button className="scroll-btn" onClick={sendToBottom}>
                    <KeyboardDoubleArrowDownIcon />
                </Button>
            </Box>
            <div ref={childRef}></div>
        </Box>
    )
}