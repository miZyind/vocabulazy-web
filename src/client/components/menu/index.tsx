// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import Bind from 'lodash-decorators/bind';
import { Grid, Menu as MenuSrc, SidebarPushable, SidebarPusher } from 'semantic-ui-react';
// Component
import SignModal from './sign-modal';
import Sidebar from './sidebar';
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';
// Model
import { IMenu } from '@models/menu';
// Action
import { Actions as MenuActions } from '@actions/menu';
import { Actions as SignModalActions } from '@actions/sign-modal';

type Props = IMenu & typeof MenuActions & typeof SignModalActions & {
  className?: string;
  location: Location;
  isMobileDisplay: boolean;
};

class Menu extends React.PureComponent<Props> {
  public render() {
    const {
      // StateProps
      location, sidebar, signModal,
      // DispatchProps
      toggleSidebar, openModal, switchMode, closeModal,
      // OwnProps
      children, className, isMobileDisplay
    } = this.props;

    const menu = isMobileDisplay
      ? <MobileMenu onSidebarItemClick={toggleSidebar} onSearchItemClick={this.openSearchPanel} />
      : <DesktopMenu location={location} onSignItemClick={openModal} />;

    const isSidebarOpened = isMobileDisplay && sidebar.visible;

    return (
      <>
        <SignModal {...signModal} doLogin={closeModal} switchMode={switchMode} closeModal={closeModal} />
        <SidebarPushable className={className}>
          <Sidebar
            location={location}
            visible={isSidebarOpened}
            onSignItemClick={openModal}
            onCloseItemClick={toggleSidebar}
          />
          <SidebarPusher
            id='pusher'
            dimmed={isSidebarOpened}
            onClick={isSidebarOpened ? this.onDimmerClick : null}
          >
            <Grid as={MenuSrc} fixed='top'>
              {menu}
            </Grid>
            <div className='content'>
              {children}
            </div>
          </SidebarPusher>
        </SidebarPushable>
      </>
    );
  }

  @Bind
  private openSearchPanel() {
    // TODO:
  }

  @Bind
  private onDimmerClick({ target }: React.MouseEvent<HTMLDivElement>) {
    if ((target as HTMLDivElement).id === 'pusher') {
      this.props.toggleSidebar();
    }
  }
}

const menuHeight = `3.5rem`;

export default styled(Menu)`
  &&&& {
    transform: none;
    .ui.grid {
      border: none;
      margin: unset;
      border-radius: unset;
      border-color: #1ABC9C;
      .ui.menu .item { padding: 0.5rem; }
    }
    .content {
      overflow-y: auto;
      margin-top: ${menuHeight};
      height: calc(100vh - ${menuHeight});
    }
    .pusher.dimmed:after {
      top: ${menuHeight} !important;
    }
  }
`;
