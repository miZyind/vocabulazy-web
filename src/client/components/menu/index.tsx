// Node module
import React from 'react';
import styled from 'styled-components';
import { Bind } from 'lodash-decorators';
import { Grid, Menu as MenuSrc, SidebarPushable, SidebarPusher } from 'semantic-ui-react';
// Model
import { IMenu } from '@models/menu';
// Action
import { Actions } from '@actions/menu';
// Component
import Sidebar from './sidebar';
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';

type Props = IMenu & typeof Actions & {
  className?: string;
  isMobileDisplay: boolean;
};

class Menu extends React.Component<Props> {
  public render() {
    const {
      // StateProps
      activeItem, sideBarVisible,
      // DispatchProps
      toggleSidebar,
      // OwnProps
      children, className, isMobileDisplay
    } = this.props;

    const menu = isMobileDisplay
      ? <MobileMenu toggleSidebar={toggleSidebar} setActiveItem={this.setActiveItem} openSearchPanel={this.openSearchPanel} />
      : <DesktopMenu activeItem={activeItem} setActiveItem={this.setActiveItem} login={this.login} signup={this.signup} />;

    return (
      <>
        <Grid className={className} as={MenuSrc} attached='top'>
          {menu}
        </Grid>
        <SidebarPushable>
          <Sidebar
            activeItem={activeItem}
            setActiveItem={this.setActiveItem}
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
  private setActiveItem(e: any, { name }: any) {
    this.props.setActiveItem(name);
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

export default styled(Menu) `
  &&&& {
    border: none;
    border-radius: unset;
    border-color: #1ABC9C;
    .ui.menu .item { padding: 0.5rem; }
  }
`;
