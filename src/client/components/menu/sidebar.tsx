// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import Bind from 'lodash-decorators/bind';
import { NavLink } from 'react-router-dom';
import { Sidebar as SidebarSrc, Menu, Button } from 'semantic-ui-react';

type Props = {
  className?: string;
  location: Location;
  visible: boolean;
  onSignItemClick: (isSignInMode: boolean) => void;
  onCloseItemClick: () => void;
};

class Sidebar extends React.PureComponent<Props> {
  public render() {
    const { className, location, visible, onCloseItemClick } = this.props;
    return (
      <SidebarSrc
        className={className}
        as={Menu}
        vertical
        inverted
        width='thin'
        animation='overlay'
        visible={visible}
        borderless
      >
        <div className='top-aligned'>
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
          <Menu.Item
            className='sign-in'
            fitted='horizontally'
            data-mode='sign-in'
            onClick={this.handleOnSignItemClick}
          >
            <Button icon='sign in' content='登入' compact />
          </Menu.Item>
          <Menu.Item
            className='sign-up'
            fitted='horizontally'
            data-mode='sign-up'
            onClick={this.handleOnSignItemClick}
          >
            <Button icon='add user' content='註冊' compact />
          </Menu.Item>
        </div>
        <div className='bottom-aligned'>
          <Menu.Item
            className='close'
            fitted='horizontally'
            onClick={onCloseItemClick}
          >
            <Button icon='arrow circle left' compact />
          </Menu.Item>
        </div>
      </SidebarSrc>
    );
  }

  @Bind
  private handleOnSignItemClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const { mode } = e.currentTarget.dataset;
    if (mode) {
      const isSignInMode = mode === 'sign-in';
      this.props.onSignItemClick(isSignInMode);
    }
  }
}

export default styled(Sidebar)`
  &&&& {
    display: flex;
    position: fixed;
    background-color: #666C78;
    margin-top: 3.5rem !important;
    justify-content: space-between;
    height: calc(100% - 3.5rem) !important;
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
    .sign-in {
      cursor: pointer;
      border-bottom: unset;
      background-color: #434A54 !important;
      &:hover { filter: brightness(110%); }
      button { color: white !important; }
    }
    .sign-up {
      cursor: pointer;
      border-bottom: unset;
      background-color: #FECE55 !important;
      &:hover { filter: brightness(110%); }
      button { color: #434A54; }
    }
    .bottom-aligned {
      margin: auto 0 0 0;
      .close {
        cursor: pointer;
        text-align: center;
        border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
        &:hover { background: rgba(255, 255, 255, 0.08); }
        button {
          width: 100%;
          height: 100%;
          margin: unset;
          padding-left: unset;
          padding-right: unset;
        }
      }
    }
  }
`;
