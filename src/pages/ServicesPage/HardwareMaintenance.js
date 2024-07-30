import React from 'react';
import NewsletterComponent from '../../components/NewsletterComponent';
import { Col, Row } from 'antd';
import Banner from "../../assets/home_ajustada.jpg"
import BannerComponent from '../../components/BannerComponent';


export default function HardwareMaintenance(props) {
    return (
        <>
            <Row gutter={16}>
                <Col flex={1} style={{ width: '100%' }}>
                    <BannerComponent src={Banner} title="Manutenção de Hardware" />
                </Col>
            </Row>
            <NewsletterComponent />
        </>
    );
}