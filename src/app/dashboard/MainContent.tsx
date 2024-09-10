/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Image from "next/image";

/**
 * メインコンテンツ
 * */

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
            <p css={paragraphStyle}>おふろみまもりだっく</p>
            <hr css={hrStyle} />
            <h1 css={headingStyle}>子供用ダック</h1>
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
