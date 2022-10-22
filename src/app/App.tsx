import './App.css';
import 'antd/dist/antd.min.css'
import Layout from 'antd/lib/layout/layout';
import { Main } from '../pages/main/main';
import { Content } from 'antd/lib/layout/layout';
import { SideBar } from '../components/sidebar/sidebar';
import { Basement } from '../components/basement/basement';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Berg } from '../pages/berg/berg';
import { Eclass } from '../pages/eclass/eclass';


function App() {
  return (
    <HashRouter>

      <Layout style={{ minHeight: '100vh' }}>
        <SideBar></SideBar>
        <Layout>
          <Content>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='A_Class' element={<Main />} />
              <Route path='AB_class' element={<Main />} />
              <Route path='D_Class' element={<Main />} />
              <Route path='E_Class' element={<Eclass />} />
              <Route path='F_Class' element={<Main />} />
              <Route path='EF2_Class' element={<Main />} />
              <Route path='Capacitors' element={<Main />} />
              <Route path='Inductors' element={<Main />} />
              <Route path='Berg' element={<Berg />} />
            </Routes>
          </Content>
          <Basement></Basement>
        </Layout>
      </Layout>
    </HashRouter>

  );
}

export default App;
