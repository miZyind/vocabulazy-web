// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Sidebar as SidebarSrc, Menu, MenuItemProps, Button } from 'semantic-ui-react';

type Props = {
  className?: string;
  location: Location;
  sideBarVisible: boolean;
  login: MenuItemProps['onClick'];
  signup: MenuItemProps['onClick'];
};

class Sidebar extends React.PureComponent<Props> {
  public render() {
    const { className, location, sideBarVisible, login, signup } = this.props;
    return (
      <SidebarSrc
        className={className}
        as={Menu}
        vertical
        inverted
        width='thin'
        animation='overlay'
        visible={sideBarVisible}
        borderless
      >
        <Menu.Item
          fitted='horizontally'
          name='forum'
          as={NavLink}
          to='/forum'
          location={location}
        >
          <Button icon='comments' content='學習論壇' compact />
        </Menu.Item>
        <Menu.Item
          fitted='horizontally'
          name='vocabulary'
          as={NavLink}
          to='/vocabulary'
          location={location}
        >
          <Button icon='fire' content='發燒單字' compact />
        </Menu.Item>
        <Menu.Item
          fitted='horizontally'
          name='note'
          as={NavLink}
          to='/note'
          location={location}
        >
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
  }
}

export default styled(Sidebar)`
  &&&& {
    background-color: #666C78;
    .item {
      padding: 0.5rem 0;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    }
    button {
      color: white;
      font-weight: 500;
      border-radius: unset;
      background-color: unset;
      font-family: 'Noto Sans TC', sans-serif;
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
