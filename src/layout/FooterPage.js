import { Layout } from 'antd';
const {  Footer } = Layout;

export default function FooterPage() {
  return (
    <Footer
        style={{
          textAlign: 'center',
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
  )
}
