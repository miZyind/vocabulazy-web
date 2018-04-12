// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Menu, Button } from 'semantic-ui-react';
// Component
import Logo from './logo';

const DesktopMenu = ({ className, activeItem, onClick }: any) => (
  <Grid.Column
    className={className}
    only='computer'
    as={Menu}
    width='16'
    inverted>
    <Menu.Item name='home' active={activeItem === 'home'} onClick={onClick}>
      <Logo />
    </Menu.Item>
    <Menu.Item name='search'>
      <Button
        icon='search'
        labelPosition='left'
        content='搜尋單字'
        className='menu-button search-button'
        color='black' />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item name='forum' active={activeItem === 'forum'} onClick={onClick}>
        <Button icon='comments' className='menu-button normal-button' content='學習論壇' compact />
      </Menu.Item>
      <Menu.Item name='vocabulary' active={activeItem === 'vocabulary'} onClick={onClick}>
        <Button icon='fire' className='menu-button normal-button' content='發燒單字' compact />
      </Menu.Item>
      <Menu.Item name='note' active={activeItem === 'note'} onClick={onClick}>
        <Button icon='edit' className='menu-button normal-button' content='我的筆記' compact />
      </Menu.Item>
      <Menu.Item>
        <Button icon='sign in' className='menu-button' color='blue' content='登入' />
        <Button icon='add user' className='menu-button' color='orange' content='註冊' />
      </Menu.Item>
    </Menu.Menu>
  </Grid.Column>
);

const StyledDesktopMenu: React.ComponentClass<any> = styled(DesktopMenu) `
  &&&& {
    padding: unset;
    border-radius: unset;
    background-color: #1ABC9C;
    .menu-button {
      font-weight: 500;
      border-radius: 0;
    }
    .search-button {
      background-color: #434A54;
      &:hover { background-color: #555E6B; }
      i { background-color: rgba(0, 0, 0, 0.3); }
    }
    .normal-button {
      color: white;
      background-color: unset;
    }
  }
`;

export default StyledDesktopMenu;
