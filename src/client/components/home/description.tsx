// Node module
import React from 'react';
import styled from 'styled-components';
import { Container, Header, Segment, Button, Image } from 'semantic-ui-react';
// Asset
import googlePlayLogo from '@assets/google.png';
import appStoreLogo from '@assets/apple.png';
import desc from '@assets/desc.jpg';

type Props = {
  className?: string;
  isMobileDisplay: boolean;
};

const googlePlayUrl = 'https://play.google.com/store/apps/details?id=wishcantw.vocabulazy';
const appStoreUrl = 'https://itunes.apple.com/tw/app/id1138382163';

const Description = ({ className, isMobileDisplay }: Props) => (
  <Container className={className} fluid>
    <div className='block'>
      <Header as='h1' children='VocabuLazy' />
      <Header as='h2'>
        世界最好用的單字軟體
        <Header.Subheader children='自由決定背誦內容' />
      </Header>
      <Button className='start' children='開始使用' size='big' color='yellow' />
    </div>
    <Image.Group style={{ display: isMobileDisplay ? 'none' : 'block' }}>
      <Image
        inline
        src={googlePlayLogo}
        target='_blank'
        href={googlePlayUrl}
      />
      <Image
        inline
        src={appStoreLogo}
        target='_blank'
        href={appStoreUrl}
      />
    </Image.Group>
  </Container>
);

export default styled(Description) `
  &.ui.container {
    display: flex;
    max-height: 700px;
    position: relative;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px);
    &:before {
      content: "";
      left: 0;
      right: 0;
      z-index: -10;
      width: 100%;
      height: calc(100vh - 50px);
      max-height: 700px;
      display: block;
      position: fixed;
      background-size: cover;
      filter: brightness(50%);
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(${desc});
    }
    .block {
      text-align: center;
      .header {
        color: white;
      }
      h1 {
        font-size: 3.5rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
    .ui.images {
      right: 0;
      bottom: 0;
      position: absolute;
      margin: 0 10px;
      .ui.inline.image {
        width: 10rem;
        margin: 10px;
        transition: filter 0.3s;
        &:hover {
          filter: brightness(110%);
        }
     }
    }
  }
`;
