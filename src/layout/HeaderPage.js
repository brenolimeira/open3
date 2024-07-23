import { Grid, Image, Input, Layout, Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import Logo from '../assets/open3.png'

const { Header } = Layout;

const { useBreakpoint } = Grid;

const StyledHeader = styled(Header)`
    background-color: #ffffff;
`

const StyledMasterContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
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
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledMenu = styled(Menu)`
    .ant-menu-title-content::before .active {
        color: red;
    }
`;

export function HeaderPage() {

    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const { toggleTheme, theme } = useTheme();
    const [showMenuVertical, setShowMenuVertical] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const screens = useBreakpoint();

    const list = [
        { label: 'Inicio', path: '/home', key: 1 },
        { label: 'Sobre', path: '/about', key: 2 },
    ]

    const handleMenuClick = (item) => {
        setShowMenuVertical(false);
        setSelectedMenuItem(item.key);
    };

    return (
        <StyledHeader>
            <StyledMasterContainerHeader>
                <StyledContainerImg to="/home" >
                    <Image src={Logo} width={80} height={64} preview={false} />
                </StyledContainerImg>
                <StyledContainerHeader>
                    <MenuContainer>
                        <StyledMenu
                            theme='light'
                            mode='horizontal'
                            style={{ width: '15rem' }}
                            selected={selectedMenuItem}
                            selectedKeys={[selectedMenuItem && selectedMenuItem.toString()]}
                            onClick={handleMenuClick}
                        >
                            {list.map((item) => (
                                <Menu.Item key={item.key}>
                                    <NavLink to={item.path}>{item.label}</NavLink>
                                </Menu.Item>
                            ))}
                        </StyledMenu>
                    </MenuContainer>
                </StyledContainerHeader>
            </StyledMasterContainerHeader>
        </StyledHeader>
    )
}