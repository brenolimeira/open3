import React from "react";
import styled from "styled-components";
import { Image, Typography } from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

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

export default function BannerComponent({ src, title }) {
    return (
        <StyledBannerContainer>
            <StyledImage src={src} preview={false} />
            <StyledTitle>{title}</StyledTitle>
        </StyledBannerContainer>
    );
}

BannerComponent.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
