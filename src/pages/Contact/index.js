import React, { useState } from "react";
import { Button, Form, Input, notification, Row, Col, Typography, Space, Image, Grid } from "antd";
import axios from "axios";
import MapComponent from "../../components/MapComponent";
import styled from "styled-components";
import Banner from "../../assets/home_ajustada.jpg";
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled, YoutubeFilled } from "@ant-design/icons";

const { Text, Title } = Typography;
const {useBreakpoint} = Grid;

const StyledBannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    margin-bottom: 24px;
    /* overflow: hidden; */
`;

const StyledTitle = styled(Title)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff !important;
    font-weight: 700;
    font-size: 32px;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 275px;
    object-fit: fill;
    /* position: absolute; */
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const StyledForm = styled(Form)`
    width: 50%;
    max-width: 600px;
`;

const ContactForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const screens = useBreakpoint();
    const isMobile = !screens.md;

    const handleSubmit = async (values) => {
        setLoading(true);

        const formData = new FormData();
        formData.append("entry.123456789", values.name);
        formData.append("entry.987654321", values.email);
        formData.append("entry.112233445", values.phone);
        formData.append("entry.556677889", values.message);

        try {
            const response = await axios.post(
                "https://script.google.com/macros/s/AKfycby0KPZYXerKhK5En6p6B3nkTqLiia0z96XTXUg-4hCzb72OEBxnOzfvcgGjHnJrlwKZ/exec",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 200) {
                notification.success({ message: "Message sent successfully!" });
                form.resetFields();
            } else {
                notification.error({ message: "Failed to send your message." });
            }
        } catch (error) {
            console.error("Error sending data to Google Form", error);
            notification.error({ message: "Failed to send your message." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Row gutter={16}>
                <Col flex={1} style={{width: '100%'}}>
                    <StyledBannerContainer>
                        <StyledImage src={Banner} preview={false} />
                        <StyledTitle strong>Contatos</StyledTitle>
                    </StyledBannerContainer>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{paddingTop: 24}}>
                <Col sm={24} xs={24} md={12} lg={12} xl={12} flex={1} style={{width: '100%'}}>
                    <FormContainer>
                        <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
                            <Form.Item>
                                <Text>Preencha o formulário abaixo e encaminhe sua solicitação.</Text>
                            </Form.Item>
                            <Form.Item name="name" rules={[{ required: true, message: "Por favor, insira seu nome." }]}>
                                <Input placeholder="Nome*" />
                            </Form.Item>
                            <Form.Item name="email" rules={[{ required: true, message: "Por favor, insira seu e-mail." }]}>
                                <Input placeholder="E-mail*" />
                            </Form.Item>
                            <Form.Item name="phone" rules={[{ required: true, message: "Por favor, insira seu número de telefone." }]}>
                                <Input placeholder="Telefone com DDD*" />
                            </Form.Item>
                            <Form.Item name="message" rules={[{ required: true, message: "Por favor, insira os detalhes sobre sua solicitação." }]}>
                                <Input.TextArea placeholder="Detalhes sobre sua solicitação*" />
                            </Form.Item>
                            <Form.Item style={{ textAlign: "end" }}>
                                <Button htmlType="submit" loading={loading} style={{background: '#FF0000', color: '#fff'}}>
                                    Enviar
                                </Button>
                            </Form.Item>
                        </StyledForm>
                    </FormContainer>
                </Col>
                <Col sm={24} xs={24} md={12} lg={12} xl={12} flex={1} style={{width: '100%', paddingBottom: 24}}>
                    <FormContainer>
                        <StyledForm>
                            <Space direction="vertical" size="middle">
                                <Space direction="vertical" size={0}>
                                    <Text style={{ fontWeight: 700 }} strong>
                                        Telefone e WhastApp
                                    </Text>
                                    <Text>+55 (87) 98822-2135</Text>
                                </Space>
                                <Space direction="vertical" size={0}>
                                    <Text style={{ fontWeight: 700 }} strong>
                                        Horário de atendimento:
                                    </Text>
                                    <Text>Segunda à Sexta das 9h às 18h.</Text>
                                    <Text>Exceto feriados.</Text>
                                </Space>
                                <Space direction="vertical" size={0}>
                                    <Text style={{ fontWeight: 700 }} strong>
                                        Redes sociais
                                    </Text>
                                    <Space size="small">
                                        <FacebookFilled style={{ fontSize: 30 }} />
                                        <LinkedinFilled style={{ fontSize: 30 }} />
                                        <YoutubeFilled style={{ fontSize: 30 }} />
                                        <InstagramFilled style={{ fontSize: 30 }} />
                                        <TwitterSquareFilled style={{ fontSize: 30 }} />
                                    </Space>
                                </Space>
                                <Text>
                                    Para envio de
                                    <Text strong> currículo </Text>,<a href="#" style={{color: '#FF0000'}}>click aqui</a>
                                </Text>
                                <Text>
                                    Para cadastro de
                                    <Text strong> parceiro </Text>,<a href="#" style={{color: '#FF0000'}}>click aqui</a>
                                </Text>
                            </Space>
                        </StyledForm>
                    </FormContainer>
                </Col>
            </Row>
            <Row style={{ paddingBottom: 24}} justify='center'>
                <MapComponent />
            </Row>
            <Row gutter={[24,24]} justify='center' align='middle' style={{ backgroundColor: "#FF0000", padding: 32}}>
                <Col sm={24} xs={24} md={12} style={{textAlign: isMobile? 'center': 'end', width: '100%'}}>
                    <Title level={3} style={{ color: "#fff" }}>
                        Receba nossa newsletter
                    </Title>
                </Col>
                <Col sm={24} xs={24} md={12} style={{ gap: '4px', textAlign: isMobile? 'center': 'start'}}>
                    <Form form={form}>
                        <Space size={"small"} align="center">
                            <Form.Item name="name" rules={[{ required: true, message: "Por favor, insira seu nome." }]} style={{all:'unset'}}>
                                <Input placeholder="Nome*" />
                            </Form.Item>
                            <Form.Item name="email" rules={[{ required: true, message: "Por favor, insira seu email." }]} style={{all:'unset'}}>
                                <Input placeholder="E-mail" />
                            </Form.Item>
                            <Form.Item style={{all:'unset'}}>
                                <Button loading={loading} style={{background: '#000', color: '#fff'}}>
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Space>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default ContactForm;
