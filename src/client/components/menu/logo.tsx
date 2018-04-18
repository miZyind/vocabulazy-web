// Node module
import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => (
  <>
    <Image src='/favicon.ico' spaced size='mini' />
    <span className={className}>VocabuLazy</span>
  </>
);

export default styled(Logo) `
  font-size: 1.5rem;
  font-family: PingFangTC;
`;
