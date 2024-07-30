import { CheckOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';


const {Title, Text} = Typography;

const StyledCard = styled(Card)`
    border: 1px solid #000;
    min-height: 450px;
    .ant-card-head {
        border: none;
    }
`

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 16px;
`;

const StyledLista = styled.div`
    display: flex;
    align-items: center;

    .icon {
        font-size: 24px;
        margin-right: 8px;
        color: red;
    }
`;

export default function CardService({data, name, icon}) {
    return (
        <StyledCard title={
            <StyledHeader>
                {icon}
                <Title level={5}>{name}</Title>
            </StyledHeader>
        }>
            {data.map(item => {
                return (
                    <StyledLista>
                        <CheckOutlined className="icon" />
                        <Text key={item.key}>
                            {item.value}
                        </Text>
                    </StyledLista>
                )
            })}
        </StyledCard>
    );
}