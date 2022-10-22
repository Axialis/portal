import Sider from 'antd/lib/layout/Sider';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import './style.css'

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
    getItem('E Class', '1'),
    getItem('F Class', '2'),
    getItem('EF2 Class', '3'),
  ]),

  getItem('Calculators', 'sub2', <CalculatorOutlined />, [
    getItem('Capacitors', '4'),
    getItem('Inductors', '5'),
  ]),

  getItem('Graphs', 'sub3', <ReadOutlined />, [
    getItem('Berg', '6'),
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
      <div className="logo" />
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