// Node module
import React from 'react';
import styled from 'styled-components';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

interface IDescriptionProps {
  className?: string;
}

const Description = ({ className }: IDescriptionProps) => (
  <div className={className}>
    <Container fluid>
      <Header as='h1' textAlign='center' children='VocabuLazy' />
      <Header as='h2' textAlign='center'>
        世界最好用的單字軟體
      <Header.Subheader children='讓你自由決定想背的內容' />
      </Header>
      <Segment textAlign='center' attached='top' compact>
        <Button className='start' children='開始使用' size='big' color='yellow' />
      </Segment>
      <Segment className='store' textAlign='right' attached='top' compact>
        <Button icon='google' labelPosition='left' content='Google Play' size='big' color='google plus' />
        <Button icon='apple' labelPosition='left' content='App Store' size='big' color='twitter' />
      </Segment>
    </Container>
  </div>
);

export default styled(Description) `
  &&&& {
    &:before {
      content: "";
      left: 0;
      right: 0;
      z-index: -10;
      width: 100%;
      height: 30rem;
      display: block;
      position: fixed;
      background-size: cover;
      filter: brightness(50%);
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(https://bnextmedia.s3.hicloud.net.tw/image/album/2016-12/img-1481097833-82363.jpg);
    }
    .container {
      height: 30rem;
      padding-top: 9rem;
    }
    .header {
      color: white;
    }
    .segment {
      border: none;
      background: unset;
    }
    .store {
      padding: 1rem 0;
    }
    .start { color: rgba(0, 0, 0, 0.8); }
    button { border-radius: unset; }
  }
`;
