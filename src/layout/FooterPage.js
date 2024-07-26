import { FacebookFilled, GoogleOutlined, InstagramFilled, LinkedinFilled, RightOutlined, StarFilled, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';
import { Col, Grid, Layout, Row, Space, Typography } from 'antd';
import styled from 'styled-components';
import StarRating from '../components/StarRating';

const {  Footer } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const StyleContentText = styled.div`
  text-align: start;
`;

const services = {
  services: [
    {
      id: 2,
      name: "Consultoria em TI",
      description: "Análise e orientação estratégica para melhorar a infraestrutura e os processos de TI da empresa."
    },
    {
      id: 3,
      name: "Gerenciamento de Projetos",
      description: "Planejamento, execução e acompanhamento de projetos de TI, garantindo a entrega no prazo e dentro do orçamento."
    },
    {
      id: 4,
      name: "Suporte Técnico",
      description: "Assistência técnica para resolução de problemas e manutenção preventiva de sistemas e redes."
    },
    {
      id: 5,
      name: "Segurança da Informação",
      description: "Implementação de políticas e soluções para proteger dados e sistemas contra ameaças e vulnerabilidades."
    },
    {
      id: 6,
      name: "Desenvolvimento de Aplicativos Móveis",
      description: "Criação de aplicativos para plataformas iOS e Android, focando na usabilidade e performance."
    },
    {
      id: 7,
      name: "Serviços de Nuvem",
      description: "Migração, gerenciamento e otimização de serviços em nuvem, como AWS, Azure e Google Cloud."
    },
    {
      id: 8,
      name: "Desenvolvimento Web",
      description: "Criação e manutenção de websites e aplicações web responsivas e otimizadas."
    },
    {
      id: 9,
      name: "Administração de Redes",
      description: "Configuração e gerenciamento de redes locais e remotas para garantir conectividade e desempenho."
    },
    {
      id: 10,
      name: "Integração de Sistemas",
      description: "Conexão de diferentes sistemas e aplicativos para melhorar a eficiência e a troca de informações."
    },
    {
      id: 11,
      name: "Treinamento e Capacitação",
      description: "Cursos e workshops para capacitar a equipe em novas tecnologias e melhores práticas de TI."
    }
  ]
}

const suport = {
    name: [
      "Portal do cliente",
      "Teste de velocidade",
      "Download TeamViewer",
  ]
}

const type_suport = {
  name: [
    "Para Windows",
    "Para macOS",
    "Para Linux - Debian",
    "Para Linux - Ubuntu",
    "Para Linux - OpenSuse"
  ]
}

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
          <Row gutter={[24,24]} style={{backgroundColor: "#2f2e2e", padding: isMobile ? "0.5em" : "5em"}}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
              <StyleContentText>
                <Title level={4} style={{color: "#fff", fontWeight: 700}}>Contatos</Title>
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
                        <StarRating count={5} />
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
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <StyleContentText>
                <Title level={4} style={{color: "#fff", fontWeight: 700}}>Institucional</Title>
                <Space size="large" direction='vertical' align='start'>
                  <Text style={{color:'#fff'}}><RightOutlined /> Blog</Text>
                  <Text style={{color:'#fff'}}><RightOutlined /> Perguntas Frequentes</Text>
                  <Text style={{color:'#fff'}}><RightOutlined /> Politica de privacidade</Text>
                  <Text style={{color:'#fff'}}><RightOutlined /> Sobre nós</Text>
                  <Text style={{color:'#fff'}}><RightOutlined /> Trabalhe conosco</Text>
                </Space>
              </StyleContentText>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} align='start'>
              <StyleContentText>
                <Title level={4} style={{color: "#fff", fontWeight: 700}}>Serviços TI</Title>
                <Space size="middle" direction='vertical'>
                  {services.services.map(service => (
                    <Text key={service.id} style={{ color: '#fff' }}>
                      <RightOutlined /> {service.name}
                    </Text>
                  ))}
                </Space>
              </StyleContentText>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <StyleContentText>
                <Title level={4} style={{color: "#fff", fontWeight: 700}}>Atendimento</Title>
                <Space size="middle" direction='vertical'>
                  {suport.name.map((item, index )=> (
                    <Text key={index} style={{ color: '#fff' }} strong>
                      <RightOutlined /> {item}
                    </Text>
                  ))}
                  {type_suport.name.map((item, index )=> (
                    <Text key={index} style={{ color: '#fff', paddingLeft: 16 }}>
                      - {item}
                    </Text>
                  ))}
                </Space>
              </StyleContentText>
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{backgroundColor: "#000"}}>
            <Col span={24} flex={1}  width='100%' style={{justifyContent: "center", padding: 8}}>
              © Desde de 2024 por BDTech
            </Col>
          </Row>
        </Col>
      </Footer>
  )
}
