import React from 'react';
import NewsletterComponent from '../../components/NewsletterComponent';
import { Col, Row } from 'antd';
import BannerComponent from '../../components/BannerComponent';
import Banner from "../../assets/home_ajustada.jpg"


export default function ItConsultancy(props) {
    return (
        <>
            <Row gutter={16}>
                <Col flex={1} style={{ width: '100%' }}>
                    <BannerComponent src={Banner} title="Consultoria em TI" />
                </Col>
            </Row>
            <NewsletterComponent />
        </>
    );
}