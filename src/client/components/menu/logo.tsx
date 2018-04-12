// Node module
import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const Logo = ({ className }: any) => (
  <>
    <Image src='/favicon.ico' spaced size='mini' />
    <span className={className}>VocabuLazy</span>
  </>
);

const StyledLogo = styled(Logo) `
  font-size: 1.5rem;
  font-family: PingFangTC;
`;

export default StyledLogo;
