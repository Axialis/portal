import Sider from 'antd/lib/layout/Sider';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

import {
  ApiOutlined,
  ReadOutlined,
  CalculatorOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Amplifies', 'sub1', <ApiOutlined />, [
    // getItem( <NavLink to="A_Class">A Class</NavLink>, '1'),
    // getItem( <NavLink to="AB_Class">AB Class</NavLink>, '2'),
    // getItem( <NavLink to="D_Class">D Class</NavLink>, '3'),
    getItem( <NavLink to="E_Class">E Class</NavLink>, '4'),
    // getItem( <NavLink to="F_Class">F Class</NavLink>, '5'),
    // getItem( <NavLink to="EF2_Class">EF2 Class</NavLink>, '6'),
  ]),

  getItem('Calculators', 'sub2', <CalculatorOutlined />, [
    // getItem( <NavLink to="Capacitors">Capacitors</NavLink>, '7'),
    // getItem( <NavLink to="Inductors">Inductors</NavLink>, '8'),
  ]),

  getItem('Graphs', 'sub3', <ReadOutlined />, [
    getItem( <NavLink to="Berg">Berg</NavLink>, '9'),
  ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

export function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <div>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
          theme="dark"
          inlineCollapsed={collapsed}
        />
      </div>
    </Sider>
  );
}