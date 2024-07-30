import React, { useEffect, useState } from "react";
import { theme, Col, Row, Typography, Grid, Button, Form, Input } from "antd";
import styled from "styled-components";
import Banner from "../../assets/home_ajustada.jpg";
import BannerComponent from "../../components/BannerComponent";
import axios from "axios";
import CardService from "../../components/CardService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faNetworkWired, faHelmetSafety, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';


const { Title, Text } = Typography;

const { useBreakpoint } = Grid;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

const StyledOrcDiv = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledForm = styled(Form)`
    padding-top: 8px;
    width: 50%;
    max-width: 400px;
`

const dataRedes = [
    { key: "1", "value": "Cabeamento estruturado" },
    { "key": "2", "value": "Reestruturação de rede física" },
    { "key": "3", "value": "Reestruturação de rede lógica" },
    { "key": "4", "value": "Implantação servidores cloud" },
    { "key": "5", "value": "Implantação servidores locais" },
    { "key": "6", "value": "Implantação de firewall e UTM" },
    { "key": "7", "value": "Estruturação de rede sem fios" },
    { "key": "8", "value": "Instalação de CFTV" }
]

const dataConsultoria = [
    { key: "1", value: "Consultoria Estratégica" },
    { key: "2", value: "Avaliação de Ativos de TI" },
    { key: "3", value: "Documentação de Rede" },
    { key: "4", value: "Planejamento de Projetos" },
    { key: "5", value: "Planejamento de Recuperação de Desastres" },
    { key: "6", value: "Planejamento de Continuidade do Negócio" },
    { key: "7", value: "Política de Segurança da Informação" },
    { key: "8", value: "Privacidade de Dados" }
]

const dataSuporte = [
    { key: "1", value: "Suporte ao usuário" },
    { key: "2", value: "Manutenção de computadores" },
    { key: "3", value: "Gestão de redes e servidores" },
    { key: "4", value: "Gestão de antivírus e backups" },
    { key: "5", value: "Gestão de e-mails e VoIP" },
    { key: "6", value: "Monitoramento de rede 24/7" },
    { key: "7", value: "Atendimento multicanais" },
    { key: "8", value: "Operador de dados (LGPD)" }
]


const dataManutencao = [
    { key: "1", value: "Manutenção de Servidores" },
    { key: "2", value: "Manutenção de Storages" },
    { key: "3", value: "Manutenção de Tapes" },
    { key: "4", value: "Manutenção de Roteadores" },
    { key: "5", value: "Manutenção de Switches" }
]


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
                    <BannerComponent src={Banner} title="Suporte de TI para empresas" />
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24} style={{ width: '100%' }}>
                    <Title level={5} style={{padding: 32}}>
                        Somos uma empresa de tecnologia B2B dedicada a atender negócios de todos os segmentos e portes. Oferecemos uma variedade de serviços, incluindo gestão e suporte de TI,
                        consultoria especializada em redes e servidores, assessoria em segurança da informação e projetos de infraestrutura para redes com e sem fio.
                        Além disso, realizamos manutenção de hardware em servidores, storages, tapes, switches e roteadores.
                    </Title>
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ padding: isMobile ? 8 : 32 }}>
                <Col sm={24} xs={24} md={12} lg={6} xl={6} xxl={6}>
                    <CardService data={dataConsultoria} name="Consultoria em TI" icon={<FontAwesomeIcon icon={faUserTie} style={{fontSize: 50}}/>}/>
                </Col>
                <Col sm={24} xs={24} md={12} lg={6} xl={6} xxl={6}>
                    <CardService data={dataRedes} name="Projeto de Redes" icon={<FontAwesomeIcon icon={faNetworkWired} style={{fontSize: 50}}/>}/>
                </Col>
                <Col sm={24} xs={24} md={12} lg={6} xl={6} xxl={6}>
                    <CardService data={dataSuporte} name="Suporte de TI" icon={<FontAwesomeIcon icon={faHelmetSafety} style={{fontSize: 50}}/>} />
                </Col>
                <Col sm={24} xs={24} md={12} lg={6} xl={6} xxl={6}>
                    <CardService data={dataManutencao} name="Manutenção de Hardware" icon={<FontAwesomeIcon icon={faScrewdriverWrench} style={{fontSize: 50}}/>} />
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ width: '100%', background: '#ff0000' }}>
                <Col flex={1}>
                    <StyledOrcDiv>
                        <Title level={5} style={{ margin: 0, color: '#fff' }}>Solicite um Orçamento</Title>
                        <StyledForm>
                            <Form.Item name="Nome" rules={[{required: true,message: "Por favor insira o nome"}]}>
                                <Input placeholder="Nome*" />
                            </Form.Item>
                            <Form.Item name="email" rules={[{required: true,message: "Por favor insira o e-mail"}]}>
                                <Input placeholder="E-mail*" />
                            </Form.Item>
                            <Form.Item name="empresa" rules={[{required: true,message: "Por favor insira a empresa"}]}>
                                <Input placeholder="Empresa*" />
                            </Form.Item>
                            <Form.Item name="telefone" rules={[{required: true,message: "Por favor insira o telefone"}]}>
                                <Input placeholder="Telefone com DDD*" />
                            </Form.Item>
                            <Form.Item name="description" rules={[{required: true,message: "Por favor insira a descrição"}]}>
                                <Input.TextArea placeholder="Detalhes da sua solicitação*" />
                            </Form.Item>
                            <Form.Item style={{ textAlign: "end" }}>
                                <Button style={{ background: '#000' }} type="primary" htmlType="submit">
                                    Enviar
                                </Button>
                            </Form.Item>
                        </StyledForm>
                    </StyledOrcDiv>
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
