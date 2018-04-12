// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Menu, MenuItemProps, Icon } from 'semantic-ui-react';
// Component
import Logo from './logo';

interface IMobileMenuProps {
  className?: string;
  toggleSidebar: MenuItemProps['onClick'];
  openSearchPanel: MenuItemProps['onClick'];
}

const MobileMenu = ({ className, toggleSidebar, openSearchPanel }: IMobileMenuProps) => (
  <Grid.Column className={className} width='16'>
    <Grid className='mobile-menu' as={Menu} inverted borderless>
      <Grid.Column className='icon-column' as={Menu.Item} width='2' onClick={toggleSidebar} stretched>
        <Icon name='sidebar' />
      </Grid.Column>
      <Grid.Column className='logo-column' as={Menu.Item} width='12'>
        <Logo />
      </Grid.Column>
      <Grid.Column className='icon-column' as={Menu.Item} width='2' onClick={openSearchPanel} stretched>
        <Icon name='search' />
      </Grid.Column>
    </Grid>
  </Grid.Column>
);

export default styled(MobileMenu) `
  &&&& {
    padding: unset;
    .mobile-menu {
      border-radius: unset;
      background-color: #1ABC9C;
    }
    .icon-column { flex-direction: unset; }
    .logo-column { justify-content: center; }
  }
`;
