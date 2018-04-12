// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Menu as MenuSrc, SidebarPushable, SidebarPusher, Icon } from 'semantic-ui-react';
// Component
import Sidebar from './sidebar';
import MobileMenu from './mobile';
import DesktopMenu from './desktop';

class Menu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeItem: 'home',
      sideBarVisible: false
    };
  }

  public render() {
    const { className } = this.props;
    const { activeItem, sideBarVisible } = this.state;
    return (
      <div>
        <Grid className={className} as={MenuSrc} attached='top'>
          <MobileMenu
            toggleSidebar={this.toggleSidebar}
            openSearchPanel={this.openSearchPanel} />
          <DesktopMenu activeItem={activeItem} onClick={this.setActiveItem} />
        </Grid>
        <SidebarPushable>
          <Sidebar
            sideBarVisible={sideBarVisible}
            activeItem={activeItem}
            onClick={this.setActiveItem} />
          <SidebarPusher style={{ height: '100vh' }} />
        </SidebarPushable>
      </div>
    );
  }

  private setActiveItem = (e: any, { name }: any) => {
    this.setState({ activeItem: name });
  }

  private openSearchPanel = () => {
    // TODO:
  }

  private toggleSidebar = () => {
    this.setState({ sideBarVisible: !this.state.sideBarVisible });
  }

}

export default styled(Menu) `
  &&&& {
    border: none;
    border-radius: unset;
    border-color: #1ABC9C;
    .ui.menu .item {
      padding: 0.5rem;
    }
  }
`;
