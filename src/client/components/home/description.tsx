// Node module
import React from 'react';
import styled from 'styled-components';
import { Container, Header, Segment, Button, Image } from 'semantic-ui-react';
// Asset
import google from '@assets/google.png';
import apple from '@assets/apple.png';
import desc from '@assets/desc.jpg';

type Props = {
  className?: string;
  isMobileDisplay: boolean;
};

const Description = ({ className, isMobileDisplay }: Props) => (
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
      <Segment
        className='store'
        textAlign='right'
        attached='top'
        compact
        style={{ display: isMobileDisplay ? 'none' : 'table' }}
      >
        <Image.Group size='small' style={{ margin: '10px' }}>
          <Image href='' src={google} inline />
          <Image href='' src={apple} inline />
        </Image.Group>
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
      background-image: url(${desc});
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
