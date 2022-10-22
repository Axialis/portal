import './App.css';
import 'antd/dist/antd.min.css'
import Layout from 'antd/lib/layout/layout';
import { Main } from '../pages/main/main';
import { Content } from 'antd/lib/layout/layout';
import { SideBar } from '../components/sidebar/sidebar';
import { Basement } from '../components/basement/basement';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Berg } from '../pages/berg/berg';


// const items: MenuItem[] = [
//   getItem('Amplifies', 'sub1', <ApiOutlined />, [
//     getItem( <NavLink to="A_Class">A Class</NavLink>, '1'),
//     getItem( <NavLink to="AB_Class">AB Class</NavLink>, '2'),
//     getItem( <NavLink to="D_Class">D Class</NavLink>, '3'),
//     getItem( <NavLink to="E_Class">E Class</NavLink>, '4'),
//     getItem( <NavLink to="F_Class">F Class</NavLink>, '5'),
//     getItem( <NavLink to="EF2_Class">EF2 Class</NavLink>, '6'),
//   ]),

//   getItem('Calculators', 'sub2', <CalculatorOutlined />, [
//     getItem( <NavLink to="Capacitors">Capacitors</NavLink>, '7'),
//     getItem( <NavLink to="Inductors">Inductors</NavLink>, '8'),
//   ]),

//   getItem('Graphs', 'sub3', <ReadOutlined />, [
//     getItem( <NavLink to="Berg">Berg</NavLink>, '9'),
//   ]),
// ];

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
              <Route path='E_Class' element={<Main />} />
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
