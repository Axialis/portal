import './App.css';
import 'antd/dist/antd.min.css'
import Layout from 'antd/lib/layout/layout';
import { Header } from 'antd/lib/layout/layout';
import { Main } from '../pages/main/main';
import { SideBar } from '../components/sidebar/sidebar';
import { Basement } from '../components/basement/basement';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar></SideBar>
      <Layout>
        <Header>Header</Header>
        <Main></Main>
        <Basement></Basement>
      </Layout>
    </Layout>

  );
}

export default App;
