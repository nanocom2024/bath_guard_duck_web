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
        backgroundColor: "#FFFFFF",
        padding: "20px",
    });

    const  headerStyle = css({
        backgroundColor: "#FFFFFF",
        padding: "10px",
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
        backgroundColor: "#FFFBDA"
    });

    const headingStyle = css({
        fontFamily: "Arial, sans-serif",
        color: "black",
        fontSize: "50px"
    });

    const hrStyle = css({
        margin: "20px 0",
        borderColor: "gray",
    });

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <p css={paragraphStyle}>おふろみまもりだっく</p>
            </Box>
            </div>
            <h1 css={headingStyle}>子供用ダック</h1>
            <p css={pStyle}>見守り中です！(ChildDetection)</p>
            {/*<Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>Contained</Button>*/}
            <Image
                src={"/images/duck.png"}
                alt={"duck"}
                width={400}
                height={300}
            />
            <p css={pStyle2}>お子様が浴槽に入水したことを検知してお知らせします。</p>
        </div>
    );
};

export default ChildDetection;
