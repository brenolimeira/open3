import React, { useEffect, useState } from "react";
import { Image, Layout, theme } from "antd";
import styled from "styled-components";
import Banner from "../../assets/image.jpg";
import axios from "axios";

const { Content } = Layout;

const StyledContent = styled(Content)`
    width: 480px;
    height: 768px;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    min-width: 100% !important;
`;

export default function HomePage() {
    const RANGE = "Sheet1";

    const [data, setData] = useState([]);
    console.log(process.env);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/${RANGE}?key=${process.env.REACT_APP_GOOGLE_SHEET_API_KEY}`);
                setData(response.data.values);
            } catch (error) {
                console.error("Error fetching data from Google Sheets", error);
            }
        };

        fetchData();
    }, []);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <StyledContent
            style={{
                padding: "0px 50px",
            }}
        >
            <StyledDiv className="site-layout-content" style={{ background: colorBgContainer }}>
                <StyledImage src={Banner} preview={false} />
                <table>
                    <thead>
                        <tr>{data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}</tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </StyledDiv>
        </StyledContent>
    );
}
