// Node module
import React from 'react';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

const Home = () => (
  <>
    <Container text style={{ 'marginTop': '7em' }}>
      <Header as='h1' textAlign='center' children='VocabuLazy' />
      <Header as='h2' textAlign='center' style={{ 'fontFamily': 'PingFangTC-Medium' }}>
        世界最好用的單字軟體
        <Header.Subheader style={{ 'fontFamily': 'PingFangTC-Medium' }} children='讓你自由決定想背的單字' />
      </Header>
      <Segment textAlign='center' attached='top' compact style={{ 'border': 'none' }}>
        <Button style={{ 'backgroundColor': '#9b9b9b', 'border': 'solid 1px #979797' }} children='開始使用' />
      </Segment>
      <Segment textAlign='right' attached='top' compact style={{ 'border': 'none' }}>
        <Button icon='google' labelPosition='left' style={{ 'backgroundColor': '#9b9b9b', 'border': 'solid 1px #979797' }} content='Google Play' />
        <Button icon='apple' labelPosition='left' style={{ 'backgroundColor': '#9b9b9b', 'border': 'solid 1px #979797' }} content='App Store' />
      </Segment>
    </Container>
    <Container text>
      <Header as='h1' textAlign='center' children='全新研發背誦模式' />
      <Header as='h1' textAlign='center' children='讓你通勤也能專心學習' />
      <Header>
        <Header.Subheader children='讓你自由決定想背的東西' />
      </Header>
    </Container>
  </>
);

export default Home;
