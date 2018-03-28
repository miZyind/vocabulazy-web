// Node module
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Menu,
  MenuItemProps,
  Sidebar,
  Image,
  Input,
  Button,
  Header,
  Container,
  Segment
} from 'semantic-ui-react';
import styled from 'styled-components';
import {
  MenuItemNormal
} from './style';

interface ILandingPageProps {
  // TODO:
}

interface ILandingPageState {
  isMobile: boolean;
  activeItem?: string;
}

class LandingPage extends React.Component<ILandingPageProps, ILandingPageState> {
  constructor(props: ILandingPageProps) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  public render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Sidebar as={Menu} secondary direction='top' visible style={{
          'backgroundColor': '#1abc9c',
        }}>
          <Menu.Item>
            <Image src='/favicon.ico' style={{
              'height': '21px',
              'width': '21px',
              'margin': '.25em'
            }} />
            <span style={{ 'color': 'white' }}>VocabuLazy</span>
          </Menu.Item>
          <Menu.Item name='search'>
            <Button primary icon='search' labelPosition='left' content='搜尋單字' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <MenuItemNormal
              name='forum'
              active={activeItem === 'forum'}
              onClick={this.handleItemClick}
              children='學習論壇'
            />
            <MenuItemNormal
              name='vocabulary'
              active={activeItem === 'vocabulary'}
              onClick={this.handleItemClick}
              children='發燒單字'
            />
            <MenuItemNormal
              name='note'
              active={activeItem === 'note'}
              onClick={this.handleItemClick}
              children='我的筆記'
            />
            <MenuItemNormal
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              children='登入'
            />
            <MenuItemNormal
              name='register'
              active={activeItem === 'register'}
              onClick={this.handleItemClick}
              style={{ 'backgroundColor': '#434a54', 'color': 'white' }}
              children='註冊'
            />
          </Menu.Menu>
        </Sidebar>
        <Container text style={{ 'marginTop': '7em' }}>
          <Header as='h1' textAlign='center'>
            VocabuLazy
          </Header>
          <Header as='h2' textAlign='center'>
            世界最好用的單字軟體
            <Header.Subheader>讓你自由決定想背的單字</Header.Subheader>
          </Header>
          <Segment textAlign='center' attached='top' compact>
            <Button>開始使用</Button>
          </Segment>
        </Container>
      </div>
    );
  }

  private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) => {
    this.setState({ activeItem: name! });
  }
}

export default styled(LandingPage) `
  font-family: 'PingFangTC-Medium';
`;
