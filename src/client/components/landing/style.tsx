// Node module
import styled from 'styled-components';
import {
  Menu,
  MenuItemProps
} from 'semantic-ui-react';

export const MenuItemNormal: React.ComponentClass<MenuItemProps> = styled(Menu.Item) `
  &&& {
    color: white;
    font-size: 14px;
    font-weight: 500;
    font-family: 'PingFangTC-Medium';
  }
`;
