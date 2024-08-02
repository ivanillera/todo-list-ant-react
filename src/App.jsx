import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/reset.css"; // Importa el CSS de Ant Design
import "./App.css"; // Importa tus estilos personalizados
import { TodoList } from "./components/TodoList";

const { Header, Content, Sider, Footer } = Layout;

const menuItems = [
  { key: "1", label: "Option 1" },
  { key: "2", label: "Option 2" },
  { key: "3", label: "Option 3" },
];

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="web-title">TODO List</div>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems}
            style={{ height: "100%", borderRight: 0 }}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            <TodoList />
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        TODO List con Ant React ©2024 Created by Iván
      </Footer>
    </Layout>
  );
};

export default App;