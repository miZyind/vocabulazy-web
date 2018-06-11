// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import Bind from 'lodash-decorators/bind';
import { Link, NavLink } from 'react-router-dom';
import { Grid, Menu, Button } from 'semantic-ui-react';
// Component
import Logo from './logo';

type Props = {
  className?: string;
  location: Location;
  openModal: (isSignInMode: boolean) => void;
};

class DesktopMenu extends React.PureComponent<Props> {
  public render() {
    const { className, location } = this.props;
    return (
      <Grid.Column className={className} as={Menu} width='16' inverted borderless>
        <Menu.Item
          name='home'
          as={Link}
          to='/'
        >
          <Logo />
        </Menu.Item>
        <Menu.Item name='search'>
          <Button
            className='search-btn'
            icon='search'
            labelPosition='left'
            content='搜尋單字'
            color='black'
          />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='forum'
            as={NavLink}
            to='/forum'
            location={location}
          >
            <Button icon='comments' content='學習論壇' compact />
          </Menu.Item>
          <Menu.Item
            name='vocabulary'
            as={NavLink}
            to='/vocabulary'
            location={location}
          >
            <Button icon='fire' content='發燒單字' compact />
          </Menu.Item>
          <Menu.Item
            name='note'
            as={NavLink}
            to='/note'
            location={location}
          >
            <Button icon='bookmark' content='我的筆記' compact />
          </Menu.Item>
          <Menu.Item>
            <Button
              className='login-btn'
              icon='sign in'
              content='登入'
              data-mode='sign-in'
              onClick={this.handleClick}
            />
            <Button
              className='signup-btn'
              icon='add user'
              content='註冊'
              data-mode='sign-up'
              onClick={this.handleClick}
            />
          </Menu.Item>
        </Menu.Menu>
      </Grid.Column>
    );
  }

  @Bind
  private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { mode } = e.currentTarget.dataset;
    if (mode) {
      const isSignInMode = mode === 'sign-in';
      this.props.openModal(isSignInMode);
    }
  }
}

export default styled(DesktopMenu)`
  &&&& {
    padding: unset;
    min-height: 3.5rem;
    border-radius: unset;
    background-color: #1ABC9C;
    button {
      color: white;
      font-weight: 500;
      border-radius: unset;
      background-color: unset;
      font-family: 'Noto Sans TC', sans-serif;
    }
    .search-btn {
      background-color: #434A54;
      &:hover { background-color: #555E6B; }
      font-family: 'Noto Sans TC', sans-serif;
      i { background-color: rgba(0, 0, 0, 0.3); }
    }
    .login-btn {
      color: white;
      transition: filter 0.3s;
      background-color: #434A54;
      &:hover { filter: brightness(110%); }
    }
    .signup-btn {
      color: #434A54;
      transition: filter 0.3s;
      background-color: #FECE55;
      &:hover { filter: brightness(110%); }
    }
  }
`;
