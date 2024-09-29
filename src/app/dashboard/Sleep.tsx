/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Image from "next/image";
import {Button} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


/**
 * ダックが見守りを終了した状態
 *
 * ダックおやすみ中
 * 休憩中です...
 * ダックをお風呂に浮かべると見守りを開始できます。
 * */

const Sleep = () => {
    console.log("Sleep");

    // Define your styles
    const containerStyle = css({
        textAlign: "center",
        backgroundColor: "#C0F5F4",
        padding: "20px",
        borderRadius: "30px"
    });

    const  headerStyle = css({
        backgroundColor: "#71F5F3",
        padding: "1px",
        margin: "-20px",
        borderRadius: "30px 30px 0px 0px"
    });

    const paragraphStyle = css({
        color: "#636363",
        fontSize: "20px",
        letterSpacing: "0.3em"
    });

    const pStyle = css({
        color: "#5f5f5f",
        fontSize: "25px",
        margin: "0px"
    });

    const pStyle2 = css({
        color: "black",
        fontSize: "20px",
        margin: "0px",
        backgroundColor: "#71F5F3",
        borderRadius: "0px",
    });

    const headingStyle = css({
        color: "black",
        fontSize: "50px",
        lineHeight: "1.4",
        margin: "25px 0 0 0",
    });

    const hrStyle = css({
        margin: "20px 0",
        borderColor: "gray",
    });

    const ImageStyle = css({
        margin: "30px 0",
    });

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <p css={paragraphStyle}>おふろみまもりだっく</p>
            </Box>
            </div>
            <h1 css={headingStyle}>お子様ダック</h1>
            <p css={pStyle}>おやすみ中です...</p>
            {/*<Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>Contained</Button>*/}
            <div css={ImageStyle}>
            <Image
                src={"/images/attention.png"}
                alt={"duck"}
                width={230}
                height={230}
            />
            </div>
            <p css={pStyle2}>ダックをお風呂に浮かべると<br/>見守りを開始できます。</p>
        </div>
    );
};

export default Sleep;
