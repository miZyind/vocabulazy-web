// Node module
import React from 'react';
import styled from 'styled-components';
import { Bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import { Sidebar as SidebarSrc, Menu, MenuItemProps, Button } from 'semantic-ui-react';
// Model
import { ActiveItem } from '@models/menu';

type Props = {
  className?: string;
  sideBarVisible: boolean;
  activeItem: string;
  setActiveItem: (name: ActiveItem) => void;
  login: MenuItemProps['onClick'];
  signup: MenuItemProps['onClick'];
};

class Sidebar extends React.PureComponent<Props> {
  public render() {
    const { className, activeItem, sideBarVisible, login, signup } = this.props;
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
          as={Link}
          to='/forum'
          active={activeItem === ActiveItem.forum}
          onClick={this.handleOnItemClick}
        >
          <Button icon='comments' content='學習論壇' compact />
        </Menu.Item>
        <Menu.Item
          fitted='horizontally'
          name='vocabulary'
          as={Link}
          to='/vocabulary'
          active={activeItem === ActiveItem.vocabulary}
          onClick={this.handleOnItemClick}
        >
          <Button icon='fire' content='發燒單字' compact />
        </Menu.Item>
        <Menu.Item
          fitted='horizontally'
          name='note'
          as={Link}
          to='/note'
          active={activeItem === ActiveItem.note}
          onClick={this.handleOnItemClick}
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

  @Bind
  private handleOnItemClick({ }, { name }: MenuItemProps) {
    if (name) {
      this.props.setActiveItem(name as ActiveItem);
    }
  }
}

export default styled(Sidebar) `
  &&&& {
    background-color: #666C78;
    .item {
      padding: 0.5rem 0;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    }
    button {
      font-weight: 500;
      border-radius: unset;
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
