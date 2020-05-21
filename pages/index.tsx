import React from 'react';
import styled from 'styled-components';

import { Button, Classes, Navbar } from '@blueprintjs/core';

const Index = ({ className }: StyledProps) => (
  <div className={className}>
    <Navbar className={Classes.DARK} fixedToTop>
      <Navbar.Group>
        <Navbar.Heading>Vocabulazy</Navbar.Heading>
        <Navbar.Divider />
        <Button icon='home' text='Home' minimal />
        <Button icon='document' text='Files' minimal />
      </Navbar.Group>
    </Navbar>
  </div>
);

export default styled(Index)``;
