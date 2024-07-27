import { Col, Row } from 'antd';
import React from 'react';
import NewsletterComponent from '../../components/NewsletterComponent';

export default function index() {
    return (
        <Row gutter={24}>
            <Col span={24}>
                <NewsletterComponent/>
            </Col>
        </Row>
    );
}