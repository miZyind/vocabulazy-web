// Node module
import React from 'react';
import styled from 'styled-components';
import { Bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import { Grid, Menu, MenuItemProps, Button, ButtonProps } from 'semantic-ui-react';
// Component
import Logo from './logo';
// Model
import { ActiveItem } from '@models/menu';

type Props = {
  className?: string;
  activeItem: string;
  setActiveItem: (name: ActiveItem) => void;
  login: ButtonProps['onClick'];
  signup: ButtonProps['onClick'];
};

class DesktopMenu extends React.PureComponent<Props> {
  public render() {
    const { className, activeItem, login, signup } = this.props;
    return (
      <Grid.Column className={className} as={Menu} width='16' inverted borderless>
        <Menu.Item
          name='home'
          as={Link}
          to='/home'
          active={activeItem === ActiveItem.home}
          onClick={this.handleOnItemClick}
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
            as={Link}
            to='/forum'
            active={activeItem === ActiveItem.forum}
            onClick={this.handleOnItemClick}
          >
            <Button icon='comments' content='學習論壇' compact />
          </Menu.Item>
          <Menu.Item
            name='vocabulary'
            as={Link}
            to='/vocabulary'
            active={activeItem === ActiveItem.vocabulary}
            onClick={this.handleOnItemClick}
          >
            <Button icon='fire' content='發燒單字' compact />
          </Menu.Item>
          <Menu.Item
            name='note'
            as={Link}
            to='/note'
            active={activeItem === ActiveItem.note}
            onClick={this.handleOnItemClick}
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

  @Bind
  private handleOnItemClick({ }, { name }: MenuItemProps) {
    if (name) {
      this.props.setActiveItem(name as ActiveItem);
    }
  }
}

export default styled(DesktopMenu) `
  &&&& {
    padding: unset;
    border-radius: unset;
    background-color: #1ABC9C;
    button {
      color: white;
      font-weight: 500;
      border-radius: unset;
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
