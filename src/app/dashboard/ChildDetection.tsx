/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Image from "next/image";
import {Button} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


/**
 * 子供が浴槽に入水してダックがそれを検知した状態。
 *
 * お子様用ダック
 * 危険です！！！
 * お子様の入水を検知しました！急いで浴室を確認してください！！
 * */

const ChildDetection = () => {
    console.log("ChildDetection");

    // Define your styles
    const containerStyle = css({
        textAlign: "center",
        backgroundColor: "#FFE3E2",
        padding: "20px",
        borderRadius: "30px"
    });

    const  headerStyle = css({
        backgroundColor: "#FFB7A5",
        padding: "1px",
        margin: "-20px",
        borderRadius: "30px 30px 0px 0px"
    });

    const paragraphStyle = css({
        color: "#636363",
        fontSize: "20px",
    });

    const pStyle = css({
        color: "black",
        fontSize: "30px",
        margin: "0px"
    });

    const pStyle2 = css({
        color: "black",
        fontSize: "30px",
        margin: "0px",
        backgroundColor: "#FFB7A5",
        borderRadius: "10px"
    });

    const headingStyle = css({
        color: "black",
        fontSize: "50px"
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
            <h1 css={headingStyle}>子供用ダック</h1>
            <p css={pStyle}>危険です！</p>
            {/*<Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>Contained</Button>*/}
            <div css={imageStyle}>
            <Image
                src={"/images/duck.png"}
                alt={"duck"}
                width={300}
                height={300}
            />
            </div>
            <p css={pStyle2}>お子様の入水を検知しました！
                急いで浴室を確認してください！！</p>
        </div>
    );
};

export default ChildDetection;
