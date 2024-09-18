/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Image from "next/image";
import {Button} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


/**
 * メインコンテンツ
 * */

const Sleep = () => {
    console.log("Sleep");

    // Define your styles
    const containerStyle = css({
        textAlign: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
    });

    const paragraphStyle = css({
        color: "blue",
        fontSize: "20px",
    });

    const headingStyle = css({
        fontFamily: "Arial, sans-serif",
        color: "green",
    });

    const hrStyle = css({
        margin: "20px 0",
        borderColor: "gray",
    });

    return (
        <div css={containerStyle}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <p css={paragraphStyle}>おふろみまもりだっく</p>
            </Box>
            <h1 css={headingStyle}>子供用ダック</h1>
          <p>現在はSleepコンポーネントだよ</p>
          <Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>Contained</Button>
            <Image
                src={"/images/duck.png"}
                alt={"duck"}
                width={300}
                height={200}
            />
        </div>
    );
};

export default Sleep;
