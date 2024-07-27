import { Col, Grid, Row, Typography, Form, Space, Input, Button } from 'antd';
import React, { useState } from 'react';

const { Title } = Typography;
const {useBreakpoint} = Grid;

export default function NewsletterComponent() {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const screens = useBreakpoint();
    const isMobile = !screens.md;

    return (
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
    );
}