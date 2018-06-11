// Node module
import React from 'react';
import styled from 'styled-components';
import { Transition, Header, Grid, Input, Button, Dimmer, Divider } from 'semantic-ui-react';

type Props = {
  className?: string;
  isOpen: boolean;
  isSignInMode: boolean;
  doLogin: () => void;
  switchMode: () => void;
  closeModal: () => void;
};

class SignModal extends React.PureComponent<Props> {
  public render() {
    const { isOpen, isSignInMode, doLogin, switchMode, closeModal } = this.props;
    let { className } = this.props;
    className += isSignInMode ? ' sign-in' : ' sign-up';
    const contentName = isSignInMode ? '登入' : '註冊';

    return (
      <Transition visible={isOpen} duration={500} unmountOnHide>
        <Dimmer page active onClickOutside={closeModal}>
          <Grid className={className}>
            <div className='background'/>
            <Header content={contentName} />
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Input placeholder='帳號' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Input placeholder='密碼' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button
                  className='login'
                  icon='check'
                  basic
                  disabled
                  onClick={doLogin}
                />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row className='oauth'>
              <Grid.Column textAlign='center'>
                <Button
                  icon='facebook'
                  labelPosition='left'
                  className='facebook'
                  content='Facebook'
                  basic
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className='oauth'>
              <Grid.Column textAlign='center'>
                <Button
                  icon='google'
                  labelPosition='left'
                  className='google'
                  content='Google'
                  basic
                />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Button className='switch' content='+' onClick={switchMode} />
          </Grid>
        </Dimmer>
      </Transition>
    );
  }
}

const signInColor = `#1ABC9C`;
const signUpColor = `#FECE55`;
const foreColor = `#434A54`;
const fontFamily = `'Noto Sans TC', sans-serif`;
const ease = `cubic-bezier(0.600, 0.040, 0.980, 0.335)`;

export default styled(SignModal)`
  &&& {
    width: 250px;
    border-radius: 2%;
    position: relative;
    background-color: ${signInColor};
    .background {
      width: 100%;
      height: 100%;
      padding: unset;
      overflow: hidden;
      border-radius: 2%;
      position: absolute;
      &:before {
        content: '';
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        background-color: ${signUpColor};
        transition: all 0.5s ${ease};
      }
    }
    .ui.header {
      z-index: 0;
      border: unset;
      margin: unset !important;
      transition: color 0.5s ${ease};
      padding: 1.5rem 2rem 0.5rem 2rem;
      font-family: ${fontFamily};
    }
    .ui.divider {
      z-index: 0;
    }
    input {
      box-shadow: unset;
      border-radius: unset;
    }
    .ui.basic.button {
      width: 13rem;
      box-shadow: unset;
      border-radius: unset;
      transition: filter 0.3s;
      font-family: ${fontFamily};
      &:hover {
        box-shadow: unset;
        filter: brightness(110%);
      }
      &:focus { box-shadow: unset; }
      &.login { transition: color 0.5s ${ease}, background-color 0.5s ${ease}; }
      &.facebook {
        color: white !important;
        background-color: #3B5998 !important;
      }
      &.google {
        color: white !important;
        background-color: #DD4B39 !important;
      }
    }
    .row { padding: 0.5rem 0 !important; }
    .switch {
      top: 5px;
      right: -30px;
      width: 60px;
      height: 60px;
      margin: unset;
      padding: unset;
      font-size: 2rem;
      line-height: 2rem;
      position: absolute;
      border-radius: 50%;
      transition: filter 0.3s, color 0.5s ${ease}, background-color 0.5s ${ease};
      &:hover { filter: brightness(110%); }
    }
    &.sign-in {
      .background {
        &:before {
          width: 60px;
          height: 60px;
          top: 5px;
          right: calc(-60px / 2);
        }
      }
      .ui.header { color: white; }
      .ui.basic.button.login {
        color: ${foreColor} !important;
        background-color: ${signUpColor} !important;
      }
      .switch {
        color: ${foreColor};
        background-color: ${signUpColor};
      }
    }
    &.sign-up {
      .background {
        &:before {
          width: 900px;
          height: 900px;
          top: calc(-900px / 2 + 5px);
          right: calc(-900px / 2);
        }
      }
      .ui.header { color: ${foreColor}; }
      .ui.basic.button.login {
        color: white !important;
        background-color: ${signInColor} !important;
      }
      .switch {
        color: white;
        background-color: ${signInColor};
      }
    }
  }
`;
