// Node module
import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import { Bind } from 'lodash-decorators';
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
      ? <MobileMenu toggleSidebar={toggleSidebar} openSearchPanel={this.openSearchPanel} />
      : <DesktopMenu location={location} openModal={openModal} />;

    return (
      <>
        <SignModal {...signModal} doLogin={closeModal} switchMode={switchMode} closeModal={closeModal} />
        <Grid className={className} as={MenuSrc}>
          {menu}
        </Grid>
        <SidebarPushable style={{ minHeight: '500px' }}>
          <Sidebar
            location={location}
            visible={isMobileDisplay && sidebar.visible}
            openModal={openModal}
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
}

export default styled(Menu)`
  &&&& {
    border: none;
    margin: unset;
    border-radius: unset;
    border-color: #1ABC9C;
    .ui.menu .item { padding: 0.5rem; }
  }
`;
