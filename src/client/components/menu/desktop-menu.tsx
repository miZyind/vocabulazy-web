// Node module
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Grid, Menu, MenuItemProps, Button, ButtonProps } from 'semantic-ui-react';
// Component
import Logo from './logo';

interface IDesktopMenuProps {
  className?: string;
  activeItem: string;
  setActiveItem: MenuItemProps['onClick'];
  login: ButtonProps['onClick'];
  signup: ButtonProps['onClick'];
}

const DesktopMenu = ({ className, activeItem, setActiveItem, login, signup }: IDesktopMenuProps) => (
  <Grid.Column className={className} as={Menu} width='16' inverted borderless>
    <Menu.Item name='home' as={NavLink} to='/home' active={activeItem === 'home'} onClick={setActiveItem}>
      <Logo />
    </Menu.Item>
    <Menu.Item name='search'>
      <Button
        className='search-btn'
        icon='search'
        labelPosition='left'
        content='搜尋單字'
        color='black' />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item name='forum' as={NavLink} to='/forum' active={activeItem === 'forum'} onClick={setActiveItem}>
        <Button icon='comments' content='學習論壇' compact />
      </Menu.Item>
      <Menu.Item name='vocabulary' as={NavLink} to='/vocabulary' active={activeItem === 'vocabulary'} onClick={setActiveItem}>
        <Button icon='fire' content='發燒單字' compact />
      </Menu.Item>
      <Menu.Item name='note' as={NavLink} to='/note' active={activeItem === 'note'} onClick={setActiveItem}>
        <Button icon='bookmark' content='我的筆記' compact />
      </Menu.Item>
      <Menu.Item>
        <Button className='login-btn' icon='sign in' content='登入' onClick={login} />
        <Button className='signup-btn' icon='add user' content='註冊' onClick={signup} />
      </Menu.Item>
    </Menu.Menu>
  </Grid.Column>
);

export default styled(DesktopMenu) `
  &&&& {
    padding: unset;
    border-radius: unset;
    background-color: #1ABC9C;
    button {
      color: white;
      font-weight: 500;
      border-radius: 0;
      background-color: unset;
    }
    .search-btn {
      background-color: #434A54;
      &:hover { background-color: #555E6B; }
      i { background-color: rgba(0, 0, 0, 0.3); }
    }
    .login-btn {
      &:hover { background: rgba(255, 255, 255, 0.3); }
    }
    .signup-btn {
      background-color: #434A54;
      &:hover { background-color: #555E6B; }
    }
  }
`;
