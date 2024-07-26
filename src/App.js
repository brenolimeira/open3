import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import Routes from './routes';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { HeaderPage } from "./layout/HeaderPage";
import { theme } from './theme';

const ThemedLayout = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={{ token: { colorPrimary: theme === 'light' ? '#1890ff' : '#001529' } }}>
        <div className={theme === 'light' ? 'light-mode' : 'dark-mode'} style={{ minHeight: '100vh' }}>
          <Layout>
            <HeaderPage />
            <Layout className="layout" style={{ background: theme === 'light' ? '#fff' : '#333' }}>
              <Routes />
            </Layout>
          </Layout>
        </div>
      </ConfigProvider>
    </ThemeProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemedLayout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
