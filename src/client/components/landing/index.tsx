// Node module
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Input,
  Button,
  Header,
  Container,
  Segment
} from 'semantic-ui-react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
// Components
import TopMenu from '../top-menu';

interface IProps {
  // TODO:
}

interface IState {
  // TODO:
}

class LandingPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <TopMenu />
        <Container text style={{ 'marginTop': '7em' }}>
          <Header as='h1' textAlign='center'>
            VocabuLazy
          </Header>
          <Header as='h2' textAlign='center' style={{ 'fontFamily': 'PingFangTC-Medium' }}>
            世界最好用的單字軟體
            <Header.Subheader style={{ 'fontFamily': 'PingFangTC-Medium' }}>讓你自由決定想背的單字</Header.Subheader>
          </Header>
          <Segment textAlign='center' attached='top' compact style={{ 'border': 'none' }}>
            <Button style={{ 'backgroundColor': '#9b9b9b', 'border': 'solid 1px #979797' }}>開始使用</Button>
          </Segment>
          <Segment textAlign='right' attached='top' compact style={{ 'border': 'none' }}>
            <Button icon='google' labelPosition='left' style={{ 'backgroundColor': '#9b9b9b', 'border': 'solid 1px #979797' }} content='Google Play' />
            <Button icon='apple' labelPosition='left' style={{ 'backgroundColor': '#9b9b9b', 'border': 'solid 1px #979797' }} content='App Store' />
          </Segment>
        </Container>
        <Container text>
          <Header as='h1' textAlign='center'>
            全新研發背誦模式
          </Header>
          <Header as='h1' textAlign='center'>
            讓你通勤也能專心學習
          </Header>
          <Header>
            <Header.Subheader>
              讓你自由決定想背的東西
            </Header.Subheader>
          </Header>
          <Header>
            <Header.Subheader>
              讓你自由決定想背的東西
              成績永遠好棒棒
            </Header.Subheader>
          </Header>
        </Container>
      </div>
    );
  }
}

export default hot(module)(LandingPage);
