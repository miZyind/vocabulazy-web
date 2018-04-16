// Node module
import React from 'react';
import styled from 'styled-components';
import { Bind, Throttle } from 'lodash-decorators';
import { Grid, Menu as MenuSrc, SidebarPushable, SidebarPusher, Icon } from 'semantic-ui-react';
// Component
import Sidebar from './sidebar';
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';

interface IMenuProps {
  className?: string;
}

interface IMenuState {
  activeItem: string;
  sideBarVisible: boolean;
  isMobileDisplay: boolean;
}

class Menu extends React.Component<IMenuProps, IMenuState> {
  private readonly mobileDisplayUpperBound = 992;

  constructor(props: any) {
    super(props);
    this.state = {
      activeItem: 'home',
      sideBarVisible: false,
      isMobileDisplay: window.innerWidth < this.mobileDisplayUpperBound
    };
  }

  public componentWillMount() {
    window.addEventListener('resize', this.detectDisplay);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.detectDisplay);
  }

  public render() {
    const { className, children } = this.props;
    const { isMobileDisplay, activeItem, sideBarVisible } = this.state;
    return (
      <div>
        <Grid className={className} as={MenuSrc} attached='top'>
          {isMobileDisplay
            ? <MobileMenu toggleSidebar={this.toggleSidebar} openSearchPanel={this.openSearchPanel} />
            : <DesktopMenu activeItem={activeItem} setActiveItem={this.setActiveItem} />
          }
        </Grid>
        <SidebarPushable>
          <Sidebar
            activeItem={activeItem}
            setActiveItem={this.setActiveItem}
            sideBarVisible={isMobileDisplay && sideBarVisible} />
          <SidebarPusher children={children} />
        </SidebarPushable>
      </div>
    );
  }

  @Bind
  private setActiveItem(e: any, { name }: any) {
    this.setState({ activeItem: name });
  }

  @Bind
  private openSearchPanel() {
    // TODO:
  }

  @Bind
  private toggleSidebar() {
    this.setState({ sideBarVisible: !this.state.sideBarVisible });
  }

  @Bind
  @Throttle(500, { leading: false })
  private detectDisplay() {
    this.setState({ isMobileDisplay: window.innerWidth < this.mobileDisplayUpperBound });
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
