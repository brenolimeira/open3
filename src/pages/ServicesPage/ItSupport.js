import React from 'react';
import NewsletterComponent from '../../components/NewsletterComponent';
import BannerComponent from '../../components/BannerComponent';
import { Col, Row } from 'antd';
import Banner from "../../assets/home_ajustada.jpg"

export default function ItSupport(props) {
    return (
        <>
            <Row gutter={16}>
                <Col flex={1} style={{ width: '100%' }}>
                    <BannerComponent src={Banner} title="Suporte de TI" />
                </Col>
            </Row>
            <NewsletterComponent />
        </>
    );
}