// Node module
import React from 'react';
import styled, { ThemedStyledInterface } from 'styled-components';
import { Sidebar, SidebarProps } from 'semantic-ui-react';

export const StyledSidebar: React.ComponentClass<SidebarProps> = styled(Sidebar) `
  &&&& {
    background-color: #1ABC9C;
    .logo-container {
      img {
        height: 2rem;
        width: 2rem;
        margin: 0 0.5rem;
      }
      span {
        font-size: 1.5rem;
        font-family: PingFangTC;
      }
    }
    .search-button {
      font-weight: 500;
      border-radius: 0;
      background-color: #434A54;
      &:hover {
        background-color: #555E6B;
      }
      i {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    .normal-button {
      color: white;
      font-weight: 500;
      border-radius: 0;
      background-color: unset;
    }
    .login-button {
      color: black;
      font-weight: 500;
      border-radius: 0;
      background-color: #E0E1E2;
      &:hover {
        color: white;
        background-color: #434A54;
      }
    }
    .register-button {
      color: white;
      font-weight: 500;
      border-radius: 0;
      background-color: #434A54;
      &:hover {
        color: black;
        background-color: #E0E1E2;
      }
    }
  }
`;
