import React, { useEffect, useState } from "react";
import { Image, theme, Col, Row, Typography, Card, Grid } from "antd";
import { LaptopOutlined, CheckOutlined } from '@ant-design/icons';
import styled from "styled-components";
import Banner from "../../assets/home.jpg";
import axios from "axios";

const { Title, Text } = Typography;

const { useBreakpoint } = Grid;


const StyledImage = styled(Image)`
    width: 100%;
    height: 275px;
    object-fit: fill;
    padding-bottom: 24px;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding-bottom: 24px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 8px;

    .icon {
        font-size: 24px;
        margin-right: 8px;
    }
`;

const Lista = styled.div`
    display: flex;
    align-items: center;

    .icon {
        font-size: 24px;
        margin-right: 8px;
        color: red;
    }
`;

const StyledCard = styled(Card)`
    border: 1px solid #000;
    .ant-card-head {
        border: none;
    }
`

const item = [
    { key: "1", value: "Desenvolvimento de Software Personalizado" },
    { key: "2", value: "Consultoria em Tecnologia da Informação" },
    { key: "3", value: "Manutenção de Sistemas e Aplicações" },
    { key: "4", value: "Implementação de Redes e Infraestrutura" },
    { key: "5", value: "Segurança da Informação e Auditoria" },
    { key: "6", value: "Suporte Técnico e Help Desk" },
    { key: "7", value: "Desenvolvimento de Aplicativos Móveis" },
    { key: "8", value: "Integração de Sistemas" },
    { key: "9", value: "Desenvolvimento Web e E-commerce" },
    { key: "10", value: "Serviços de Backup e Recuperação de Dados" },
    { key: "11", value: "Consultoria em Cloud Computing" },
    { key: "12", value: "Desenvolvimento de Soluções de IA e Machine Learning" },
    { key: "13", value: "Desenvolvimento de Sistemas de Automação" },
    { key: "14", value: "Treinamento e Capacitação em TI" },
    { key: "15", value: "Gerenciamento de Projetos de TI" }
];




export default function HomePage() {
    const RANGE = "Sheet1";

    const screens = useBreakpoint();
    const isMobile = !screens.md;

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
        <StyledDiv className="site-layout-content" style={{ background: colorBgContainer }}>
            <Row gutter={16}>
                <Col flex={1} style={{ width: '100%' }}>
                    <StyledImage src={Banner} preview={false} />
                </Col>
            </Row>

            <Row gutter={[16,16]} style={{ padding: isMobile ? 8 : 32 }}>
                <Col flex={1} sm={24} xs={24} md={8} lg={8} xl={8} xxl={8}>
                    <StyledCard title={<Header><LaptopOutlined className="icon" />
                        <Title level={4} style={{ margin: 0 }}>Consultoria de TI para Empresas</Title></Header>}>
                        {item.map(item => {
                            return (
                                <Lista>
                                    <CheckOutlined className="icon" />
                                    <Text key={item.key}>
                                        {item.value}
                                    </Text>
                                </Lista>
                            )
                        })}
                    </StyledCard>
                </Col>
                <Col flex={1} sm={24} xs={24} md={8} lg={8} xl={8} xxl={8}>
                    <StyledCard title={<Header><LaptopOutlined className="icon" />
                        <Title level={4} style={{ margin: 0 }}>Consultoria de TI para Empresas</Title></Header>}>
                        {item.map(item => {
                            return (
                                <Lista>
                                    <CheckOutlined className="icon" />
                                    <Text key={item.key}>
                                        {item.value}
                                    </Text>
                                </Lista>
                            )
                        })}
                    </StyledCard>
                </Col>
            </Row>


            {/* <table>
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
                </table> */}
        </StyledDiv>
    );
}
