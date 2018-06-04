// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Grid, Menu, Button, ButtonProps } from 'semantic-ui-react';
// Component
import Logo from './logo';

type Props = {
  className?: string;
  location: Location;
  login: ButtonProps['onClick'];
  signup: ButtonProps['onClick'];
};

class DesktopMenu extends React.PureComponent<Props> {
  public render() {
    const { className, location, login, signup } = this.props;
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
            <Button className='login-btn' icon='sign in' content='登入' onClick={login} />
            <Button className='signup-btn' icon='add user' content='註冊' onClick={signup} />
          </Menu.Item>
        </Menu.Menu>
      </Grid.Column>
    );
  }
}

export default styled(DesktopMenu)`
  &&&& {
    padding: unset;
    min-height: 50px;
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
      &:hover { background: rgba(255, 255, 255, 0.3); }
    }
    .signup-btn {
      background-color: #434A54;
      &:hover { background-color: #555E6B; }
    }
  }
`;
