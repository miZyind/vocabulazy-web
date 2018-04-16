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
  login: MenuItemProps['onClick'];
  signup: MenuItemProps['onClick'];
}

const Sidebar = ({ className, sideBarVisible, activeItem, setActiveItem, login, signup }: ISidebarProps) => (
  <SidebarSrc
    className={className}
    as={Menu}
    vertical
    inverted
    width='thin'
    animation='push'
    visible={sideBarVisible}
    borderless>
    <Menu.Item
      fitted='horizontally'
      name='forum'
      as={NavLink}
      to='/forum'
      active={activeItem === 'forum'}
      onClick={setActiveItem}>
      <Button icon='comments' content='學習論壇' compact />
    </Menu.Item>
    <Menu.Item
      fitted='horizontally'
      name='vocabulary'
      as={NavLink}
      to='/vocabulary'
      active={activeItem === 'vocabulary'}
      onClick={setActiveItem}>
      <Button icon='fire' content='發燒單字' compact />
    </Menu.Item>
    <Menu.Item
      fitted='horizontally'
      name='note'
      as={NavLink}
      to='/note'
      active={activeItem === 'note'}
      onClick={setActiveItem}>
      <Button icon='bookmark' content='我的筆記' compact />
    </Menu.Item>
    <Menu.Item className='login-item' fitted='horizontally' onClick={login}>
      <Button icon='sign in' content='登入' compact />
    </Menu.Item>
    <Menu.Item className='signup-item' fitted='horizontally' onClick={signup}>
      <Button icon='add user' content='註冊' compact />
    </Menu.Item>
  </SidebarSrc>
);

export default styled(Sidebar) `
  &&&& {
    background-color: #666C78;
    .item {
      padding: 0.5rem 0;
      border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    }
    button {
      font-weight: 500;
      border-radius: 0;
      color: white;
      background-color: unset;
    }
    .login-item {
      cursor: pointer;
      &:hover { background: rgba(255, 255, 255, 0.08); }
    }
    .signup-item {
      cursor: pointer;
      background-color: #434A54;
      &:hover { background-color: #555E6B; }
    }
  }
`;
