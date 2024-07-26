import { FacebookFilled, GoogleOutlined, InstagramFilled, LinkedinFilled, RightOutlined, StarFilled, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';
import { Col, Grid, Layout, Row, Space, Typography } from 'antd';
import styled from 'styled-components';

const {  Footer } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const StyleContentText = styled.div`
  text-align: start;
`;

export default function FooterPage() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  
  return (
    <Footer
        style={{
          textAlign: 'center',
          color: "#fff",
          padding: 0
        }}
      >
        <Col flex={1} style={{width: "100%"}}>
          <Row gutter={[16,16]} style={{backgroundColor: "#2f2e2e", padding: isMobile ? "0.5em" : "5em"}}>
            <Col span={6}>
              <Title level={4} style={{color: "#fff", fontWeight: 700}}>Contatos</Title>
              <StyleContentText>
                <Space direction='vertical' size="middle">
                  <div>
                    <Text style={{color: "#fff", fontWeight: 700}} strong>Endereço: </Text>
                    <Text style={{color: "#fff"}}>Rua num sei das quantas, 235, Serra Talhada-PE</Text>
                  </div>
                  <Space direction='vertical' size={0}>
                    <Text style={{color: "#fff", fontWeight: 700}} strong>Telefone: </Text>
                    <Text style={{color: "#fff"}}>+55 (87) 98822-2135</Text>
                  </Space>
                  <Space direction='vertical' size={0}>
                    <Text style={{color: "#fff", fontWeight: 700}} strong>Horário de atendimento: </Text>
                    <Text style={{color: "#fff"}}>Segunda à Sexta das 9h às 18h.</Text>
                  </Space>
                  <Space direction='vertical' size={0}>
                    <Text style={{color: "#fff", fontWeight: 700}} strong>Google Review</Text>
                    <Space size="small">
                      <GoogleOutlined style={{fontSize: 20}} />
                      <Space size={4}>
                        <StarFilled style={{color: '#FFFF00', fontSize: 20}} />
                        <StarFilled style={{color: '#FFFF00', fontSize: 20}} />
                        <StarFilled style={{color: '#FFFF00', fontSize: 20}} />
                        <StarFilled style={{color: '#FFFF00', fontSize: 20}} />
                        <StarFilled style={{color: '#FFFF00', fontSize: 20}} />
                      </Space>
                    </Space>
                  </Space>
                  <Space direction='vertical' size={0}>
                    <Text style={{color: "#fff", fontWeight: 700}} strong>Redes sociais</Text>
                    <Space size="small">
                      <FacebookFilled style={{color: '#FFF', fontSize: 30}} />
                      <LinkedinFilled style={{color: '#FFF', fontSize: 30}} />
                      <YoutubeFilled style={{color: '#FFF', fontSize: 30}} />
                      <InstagramFilled style={{color: '#FFF', fontSize: 30}} />
                      <TwitterSquareFilled style={{color: '#FFF', fontSize: 30}} />
                    </Space>
                  </Space>
                </Space>
              </StyleContentText>
            </Col>
            <Col span={6}>
              <Title level={4} style={{color: "#fff", fontWeight: 700}}>Institucional</Title>
              <Space size="large" direction='vertical' align='start'>
                <Text style={{color:'#fff'}}><RightOutlined /> Blog</Text>
                <Text style={{color:'#fff'}}><RightOutlined /> Perguntas Frequentes</Text>
                <Text style={{color:'#fff'}}><RightOutlined /> Politica de privacidade</Text>
                <Text style={{color:'#fff'}}><RightOutlined /> Sobre nós</Text>
                <Text style={{color:'#fff'}}><RightOutlined /> Trabalhe conosco</Text>
              </Space>
            </Col>
            <Col span={6}>
              <Title level={4} style={{color: "#fff", fontWeight: 700}}>Serviços TI</Title>
              <Space size="middle" direction='vertical' align='start'>
                <Text style={{color: '#fff'}}><RightOutlined/> Assessoria de TI</Text>
                <Text style={{color: '#fff'}}><RightOutlined/> Gestão de TI</Text>
              </Space>
            </Col>
            <Col span={6}>
              <Title level={4} style={{color: "#fff", fontWeight: 700}}>Atendimento</Title>
            </Col>
          </Row>
          <Row style={{backgroundColor: "#000", display: "flex", justifyContent: "center", padding: 8}}>
            Ant Design ©2023 Created by Ant UED
          </Row>
        </Col>
      </Footer>
  )
}
