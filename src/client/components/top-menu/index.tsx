// Node module
import React from 'react';
import styled from 'styled-components';
// Style
import { StyledSidebar } from './style';
import {
  Menu,
  MenuItemProps,
  Image,
  Button
} from 'semantic-ui-react';

interface IProps {
  // TODO:
}

interface IState {
  activeItem?: string;
}

export default class TopMenu extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  public render() {
    const { activeItem } = this.state;

    return (
      <StyledSidebar as={Menu} direction='top' inverted visible>
        <Menu.Item
          name='home'
          className='logo-container'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Image src='/favicon.ico' />
          <span>VocabuLazy</span>
        </Menu.Item>
        <Menu.Item name='search'>
          <Button
            icon='search'
            labelPosition='left'
            content='搜尋單字'
            className='search-button'
            color='black' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='forum'
            active={activeItem === 'forum'}
            onClick={this.handleItemClick}
          >
            <Button className='normal-button' content='學習論壇' compact />
          </Menu.Item>
          <Menu.Item
            name='vocabulary'
            active={activeItem === 'vocabulary'}
            onClick={this.handleItemClick}
          >
            <Button className='normal-button' content='發燒單字' compact />
          </Menu.Item>
          <Menu.Item
            name='note'
            active={activeItem === 'note'}
            onClick={this.handleItemClick}
          >
            <Button className='normal-button' content='我的筆記' compact />
          </Menu.Item>
          <Menu.Item fitted>
            <Button className='login-button' content='登入' compact />
          </Menu.Item>
          <Menu.Item fitted>
            <Button className='register-button' content='註冊' compact />
          </Menu.Item>
        </Menu.Menu>
      </StyledSidebar>
    );
  }

  private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) => {
    this.setState({ activeItem: name! });
  }
}
