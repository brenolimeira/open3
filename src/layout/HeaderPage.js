import { Grid, Image, Layout, Menu, Input } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import Logo from '../assets/open3.png'


const { Header } = Layout; 
const { Search } = Input;
const { useBreakpoint } = Grid;

const StyledHeader = styled(Header)`
    background-color: #2f2e2e;
`

const StyledSearch = styled(Search)`
    .ant-input-wrapper .ant-btn {
        background-color: #FF0000 !important;
        background: #FF0000 !important;
    }
    .ant-input-wrapper .ant-btn:hover {
        background-color: #f84000 !important;
        background: #f84000 !important;
    }
`

const StyledMasterContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyledContainerImg = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContainerHeader = styled.div`
    display: flex;
    align-items: center;
`;

const MenuContainer = styled.div`
    gap: 20px;

`;

const StyledMenu = styled(Menu)`
    .ant-menu-title-content::before .active {
        color: red;
    }
    background-color: #2f2e2e;
`;

export function HeaderPage() {

    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const { toggleTheme, theme } = useTheme();
    const [showMenuVertical, setShowMenuVertical] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    const list = [
        { label: 'Inicio', path: '/home', key: "home" },
        { label: 'Sobre', path: '/about', key: "about" },
        { label: 'Contato', path: '/contact', key: "contact" },
    ]

    const handleMenuClick = (item) => {
        setShowMenuVertical(false);
        setSelectedMenuItem(item.key);
    };

    return (
        <StyledHeader>
            <StyledMasterContainerHeader>
                <StyledContainerImg to="/home" >
                    <Image src={Logo} width={100} height={64} preview={false} />
                </StyledContainerImg>
                <StyledContainerHeader>
                    <MenuContainer>
                        <StyledMenu
                            mode='horizontal'
                            style={{ width: '15rem' }}
                            selected={selectedMenuItem}
                            selectedKeys={[selectedMenuItem && selectedMenuItem.toString()]}
                            onClick={handleMenuClick}
                        >
                            {list.map((item) => (
                                <Menu.Item key={item.key} style={{ color: 'white' }}>
                                    <NavLink to={item.path}>{item.label}</NavLink>
                                </Menu.Item>
                            ))}
                        </StyledMenu>
                    </MenuContainer>
                    <StyledSearch placeholder="Pesquisar" size='middle' onSearch={onSearch} enterButton />
                </StyledContainerHeader>
            </StyledMasterContainerHeader>
        </StyledHeader>
    )
}