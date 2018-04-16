// Node module
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Sidebar as SidebarSrc, Icon, Menu, MenuItemProps, Button } from 'semantic-ui-react';

interface ISidebarProps {
  className?: string;
  sideBarVisible: boolean;
  activeItem: string;
  setActiveItem: MenuItemProps['onClick'];
}

const Sidebar = ({ className, sideBarVisible, activeItem, setActiveItem }: ISidebarProps) => (
  <SidebarSrc
    className={className}
    as={Menu}
    animation='push'
    width='thin'
    icon='labeled'
    vertical
    inverted
    visible={sideBarVisible}
    borderless>
    <Menu.Item name='forum' as={NavLink} to='/forum' active={activeItem === 'forum'} onClick={setActiveItem}>
      <Icon name='comments' />
      學習論壇
    </Menu.Item>
    <Menu.Item name='vocabulary' as={NavLink} to='/vocabulary' active={activeItem === 'vocabulary'} onClick={setActiveItem}>
      <Icon name='fire' />
      發燒單字
    </Menu.Item>
    <Menu.Item name='note' as={NavLink} to='/note' active={activeItem === 'note'} onClick={setActiveItem}>
      <Icon name='edit' />
      我的筆記
    </Menu.Item>
    <Menu.Item>
      <Button icon='sign in' className='menu-button' color='blue' content='登入' />
      <Button icon='add user' className='menu-button' color='orange' content='註冊' />
    </Menu.Item>
  </SidebarSrc>
);

export default styled(Sidebar) `
  &&&& {
    .menu-button {
      font-weight: 500;
      border-radius: 0;
    }
  }
`;
