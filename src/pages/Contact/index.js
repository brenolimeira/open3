// src/components/ContactForm.js

import React, { useState } from "react";
import { Button, Form, Input, notification, Row, Col, Typography } from "antd";
import axios from "axios";
import MapComponent from "../../components/MapComponent";
import styled from "styled-components";

const {Text} = Typography

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

    const handleSubmit = async (values) => {
        setLoading(true);

        const formData = new FormData();
        formData.append('entry.123456789', values.name);
        formData.append('entry.987654321', values.email);
        formData.append('entry.112233445', values.phone);
        formData.append('entry.556677889', values.message);

        try {
            const response = await axios.post(
                'https://script.google.com/macros/s/AKfycby0KPZYXerKhK5En6p6B3nkTqLiia0z96XTXUg-4hCzb72OEBxnOzfvcgGjHnJrlwKZ/exec',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
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
        <Col style={{padding: 32}}>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={12} lg={12} xl={12}>
                    <FormContainer>
                        <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
                            <Form.Item>
                                <Text>Fill out the form below and submit your request.</Text>
                            </Form.Item>
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input your email!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Please input your phone number!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please input your message!" }]}>
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item style={{textAlign: "end"}}>
                                <Button type="primary" htmlType="submit" loading={loading}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </StyledForm>
                    </FormContainer>
                </Col>
                <Col sm={24} xs={24} md={12} lg={12} xl={12}>
                    <FormContainer>
                        <StyledForm>
                            dados de redes sociais e contatos
                        </StyledForm>
                    </FormContainer>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{display: "flex", justifyContent: "center"}}>
                    <MapComponent />
                </Col>
            </Row>
        </Col>
    );
};

export default ContactForm;
