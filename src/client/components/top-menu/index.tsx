// Node module
import React from 'react';
import styled from 'styled-components';
// Style
import { StyledSidebar } from './style';
import {
  Menu,
  MenuItemProps,
  Image,
  Button,
  Icon,
  Segment,
  Sidebar,
  Header,
  Container,
  Grid,
  Label,
  Item
} from 'semantic-ui-react';

interface IProps {
  className: string;
}

interface IState {
  isMobile: boolean;
  visible: boolean;
  activeItem?: string;
}

class TopMenu extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isMobile: false,
      visible: false,
      activeItem: 'home'
    };
  }

  public render() {
    const { className } = this.props;
    const { isMobile, visible, activeItem } = this.state;

    return (
      <div>
        <Grid className={className} as={Menu} attached='top' >
          <Grid.Column only='tablet mobile' width='16' style={{ padding: 'unset' }}>
            <Grid as={Menu} inverted borderless>
              <Grid.Column as={Menu.Item} width='2' onClick={this.onClick} stretched style={{ flexDirection: 'unset' }}>
                <Icon name='sidebar' />
              </Grid.Column>
              <Grid.Column as={Menu.Item} width='12' style={{ justifyContent: 'center' }} >
                <Image src='/favicon.ico' spaced size='mini' />
                <span style={{ fontSize: '1.5rem', fontFamily: 'PingFangTC' }}>VocabuLazy</span>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column only='computer' as={Menu} width='16' style={{ padding: 'unset' }} inverted>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <Image src='/favicon.ico' spaced size='mini' />
              <span style={{ fontSize: '1.5rem', fontFamily: 'PingFangTC' }}>VocabuLazy</span>
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
                <Button icon='comments' className='normal-button' content='學習論壇' compact />
              </Menu.Item>
              <Menu.Item
                name='vocabulary'
                active={activeItem === 'vocabulary'}
                onClick={this.handleItemClick}
              >
                <Button icon='fire' className='normal-button' content='發燒單字' compact />
              </Menu.Item>
              <Menu.Item
                name='note'
                active={activeItem === 'note'}
                onClick={this.handleItemClick}
              >
                <Button icon='edit' className='normal-button' content='我的筆記' compact />
              </Menu.Item>
              <Menu.Item className='control'>
                <Button icon='sign in' color='blue' content='登入' />
                <Button icon='add user' color='orange' content='註冊' />
              </Menu.Item>
            </Menu.Menu>
          </Grid.Column>
        </Grid>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' width='thin' icon='labeled' vertical inverted visible={visible}>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher style={{ height: '100vh' }}>
            123
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }

  private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) => {
    this.setState({ activeItem: name! });
  }

  private onClick = (e: any) => {
    this.setState({ visible: !this.state.visible });
  }
}

export default styled(TopMenu) `
  &&&& {
    border: none;
    border-radius: 0;
    background-color: #1ABC9C;
    .ui.menu .item {
      padding: 0.5rem;
    }
    .search-button {
      font-weight: 500;
      border-radius: 0;
      background-color: #434A54;
      &:hover {
        background-color: #555E6B;
      }
      i {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    .normal-button {
      color: white;
      font-weight: 500;
      border-radius: 0;
      background-color: unset;
    }
    .control {
      button {
        font-weight: 500;
        border-radius: 0;
      }
    }
  }
`;
