import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import { Counter } from './features/counter/Counter';

const { Header, Content } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3', '4'].map((key) => ({
  key,
  label: `Flow ${key}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Layout style={{ padding: '24px', height: '100%' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,

              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <main className='main-content'>
              <section className='main-content__section'>
                <div>
                  <Counter/>
                </div>
                <div>
                  <p>Widget2</p>
                </div>
                <div>
                  <p>Widget3</p>
                </div>
              </section>
              <section className='main-content__section'>
                <div>Parameters panel</div>
              </section>
              <footer className='main-content__footer'>
                  <div>
                    <Button type="primary" icon={<LaptopOutlined />}>QC</Button>
                  </div>
                  <div>
                  <Button type="default">?</Button>
                  <Button type="default">Save</Button>
                  <Button type="primary">Run</Button>
                  <Button type="primary">Run to this</Button>

                  </div>
              </footer>
            </main>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;