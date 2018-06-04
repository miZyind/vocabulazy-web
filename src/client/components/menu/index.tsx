// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import { Bind } from 'lodash-decorators';
import { Grid, Menu as MenuSrc, SidebarPushable, SidebarPusher } from 'semantic-ui-react';
// Component
import Sidebar from './sidebar';
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';
// Model
import { IMenu } from '@models/menu';
// Action
import { Actions } from '@actions/menu';

type Props = IMenu & typeof Actions & {
  className?: string;
  location: Location;
  isMobileDisplay: boolean;
};

class Menu extends React.Component<Props> {
  public render() {
    const {
      // StateProps
      sideBarVisible, location,
      // DispatchProps
      toggleSidebar,
      // OwnProps
      children, className, isMobileDisplay
    } = this.props;

    const menu = isMobileDisplay
      ? <MobileMenu location={location} toggleSidebar={toggleSidebar} openSearchPanel={this.openSearchPanel} />
      : <DesktopMenu location={location} login={this.login} signup={this.signup} />;

    return (
      <>
        <Grid className={className} as={MenuSrc} attached='top'>
          {menu}
        </Grid>
        <SidebarPushable style={{ minHeight: '500px' }}>
          <Sidebar
            location={location}
            sideBarVisible={isMobileDisplay && sideBarVisible}
            login={this.login}
            signup={this.signup}
          />
          <SidebarPusher children={children} />
        </SidebarPushable>
      </>
    );
  }

  @Bind
  private openSearchPanel() {
    // TODO:
  }

  @Bind
  private login() {
    // TODO:
  }

  @Bind
  private signup() {
    // TODO:
  }
}

export default styled(Menu)`
  &&&& {
    border: none;
    border-radius: unset;
    border-color: #1ABC9C;
    .ui.menu .item { padding: 0.5rem; }
  }
`;
