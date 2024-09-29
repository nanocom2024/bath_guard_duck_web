/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Box from '@mui/material/Box';
import DuckImage from "@/utils/components/frontend/DuckImage";


/**
 * ダックが入水して見守りを開始した状態
 *
 * お子様用ダック
 * 見守り中です！
 * お子様が浴槽に入水したことを検知してお知らせします。
 * */
const ChildEnter = () => {
    console.log("ChildEnter");

    // Define your styles
    const containerStyle = css({
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "30px"
    });

    const  headerStyle = css({
        backgroundColor: "rgb(254, 185, 46)",
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
        backgroundColor: "#EFAA2E",
        borderRadius: "5px"
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

    const imageStyle = css({
        // margin: "0% -40%",
    });

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <p css={paragraphStyle}>おふろみまもりだっく</p>
            </Box>
            </div>
            <h1 css={headingStyle}>お子様ダック</h1>
            <p css={pStyle}>見守り中です！</p>
            {/*<Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>Contained</Button>*/}
            <div css={imageStyle}>
                <DuckImage />
            </div>
            <p css={pStyle2}>お子様が浴槽に入水したことを<br/>検知してお知らせします。</p>
        </div>
    );
};

export default ChildEnter;
