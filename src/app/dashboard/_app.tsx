/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Image from "next/image";
import { Button, Box } from "@mui/material";

// メインコンテンツ
const MainContent = () => {
    console.log("MainContent");

    // Define your styles
    const containerStyle = css({
        textAlign: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
    });

    const paragraphStyle = css({
        color: "blue",
        fontSize: "20px",
        fontFamily: "'Zen Kaku Gothic New', sans-serif", // 個別にフォントを適用
    });

    const headingStyle = css({
        fontFamily: "'Zen Kaku Gothic New', sans-serif", // ヘッディングにも適用
        color: "green",
    });

    return (
        <div css={containerStyle}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <p css={paragraphStyle}>おふろみまもりだっく</p>
            </Box>
            <h1 css={headingStyle}>子供用ダック</h1>
            <Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>
                Contained
            </Button>
            <Image
                src={"/images/duck.png"}
                alt={"duck"}
                width={300}
                height={200}
            />
        </div>
    );
};

export default MainContent;
