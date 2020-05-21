import React from 'react';
import styled from 'styled-components';

import { Button, Classes, Navbar } from '@blueprintjs/core';

const Index = ({ className }: StyledProps) => (
  <div className={className}>
    <Navbar className='bp3-dark' fixedToTop>
      <Navbar.Group>
        <Navbar.Heading>Vocabulazy</Navbar.Heading>
        <Navbar.Divider />
        <Button className={Classes.MINIMAL} icon='home' text='Home' />
        <Button className={Classes.MINIMAL} icon='document' text='Files' />
      </Navbar.Group>
    </Navbar>
  </div>
);

export default styled(Index)``;
