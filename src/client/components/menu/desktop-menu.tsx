// Node module
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Grid, Menu, MenuItemProps, Button } from 'semantic-ui-react';
// Component
import Logo from './logo';

interface IDesktopMenuProps {
  className?: string;
  activeItem: string;
  setActiveItem: MenuItemProps['onClick'];
}

const DesktopMenu = ({ className, activeItem, setActiveItem }: IDesktopMenuProps) => (
  <Grid.Column className={className} as={Menu} width='16' inverted borderless>
    <Menu.Item name='home' as={NavLink} to='/home' active={activeItem === 'home'} onClick={setActiveItem}>
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
      <Menu.Item name='forum' as={NavLink} to='/forum' active={activeItem === 'forum'} onClick={setActiveItem}>
        <Button icon='comments' className='menu-button normal-button' content='學習論壇' compact />
      </Menu.Item>
      <Menu.Item name='vocabulary' as={NavLink} to='/vocabulary' active={activeItem === 'vocabulary'} onClick={setActiveItem}>
        <Button icon='fire' className='menu-button normal-button' content='發燒單字' compact />
      </Menu.Item>
      <Menu.Item name='note' as={NavLink} to='/note' active={activeItem === 'note'} onClick={setActiveItem}>
        <Button icon='edit' className='menu-button normal-button' content='我的筆記' compact />
      </Menu.Item>
      <Menu.Item>
        <Button icon='sign in' className='menu-button' color='blue' content='登入' />
        <Button icon='add user' className='menu-button' color='orange' content='註冊' />
      </Menu.Item>
    </Menu.Menu>
  </Grid.Column>
);

export default styled(DesktopMenu) `
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
