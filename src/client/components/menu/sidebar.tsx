// Node module
import React from 'react';
import styled from 'styled-components';
import { Sidebar as SidebarSrc, Icon, Menu, Button } from 'semantic-ui-react';

const Sidebar = ({ className, sideBarVisible, activeItem, onClick }: any) => (
  <SidebarSrc
    className={className}
    as={Menu}
    animation='push'
    width='thin'
    icon='labeled'
    vertical
    inverted
    visible={sideBarVisible}>
    <Menu.Item name='forum' active={activeItem === 'forum'}  onClick={onClick}>
      <Icon name='comments' />
      學習論壇
    </Menu.Item>
    <Menu.Item name='vocabulary' active={activeItem === 'vocabulary'}  onClick={onClick}>
      <Icon name='fire' />
      發燒單字
    </Menu.Item>
    <Menu.Item name='note' active={activeItem === 'note'}  onClick={onClick}>
      <Icon name='edit' />
      我的筆記
    </Menu.Item>
    <Menu.Item>
      <Button icon='sign in' className='menu-button' color='blue' content='登入' />
      <Button icon='add user' className='menu-button' color='orange' content='註冊' />
    </Menu.Item>
  </SidebarSrc>
);

const StyledSidebar: React.ComponentClass<any> = styled(Sidebar) `
  &&&& {
    .menu-button {
      font-weight: 500;
      border-radius: 0;
    }
  }
`;

export default StyledSidebar;
