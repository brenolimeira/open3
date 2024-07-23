import React from 'react';
import { Image, Layout, theme } from 'antd';
import styled from 'styled-components';

import Banner from '../../assets/image.jpg'

const { Content } = Layout;

const StyledContent = styled(Content)`
    width: 480;
    height: 768;
`

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    min-width: 100% !important;
`

export default function HomePage() {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <StyledContent
            style={{
                padding: '0px 50px',
            }}
        >
            <StyledDiv className='site-layout-content' style={{ background: colorBgContainer, }}>
                <StyledImage src={Banner} preview={false} />
            </StyledDiv>
        </StyledContent>
    )
}