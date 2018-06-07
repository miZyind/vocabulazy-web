// Node module
import React from 'react';
import styled from 'styled-components';
import { Transition, Header, Grid, Input, Button, Dimmer, Divider } from 'semantic-ui-react';

type Props = {
  className?: string;
  isOpen: boolean;
  doLogin: () => void;
};

class SignModal extends React.PureComponent<Props> {
  public render() {
    // tslint:disable:jsx-no-lambda
    const { className, isOpen, doLogin } = this.props;
    return (
      <Transition visible={isOpen} duration={500} unmountOnHide>
        <Dimmer page active>
          <Grid className={className}>
            <Header content='登入' />
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
                  content='登入'
                  basic
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
            <Button className='switch' content='+' />
          </Grid>
        </Dimmer>
      </Transition>
    );
  }
}

export default styled(SignModal)`
  &&& {
    width: 250px;
    border-radius: 1%;
    position: relative;
    padding: 2rem 0 1.5rem 0;
    background-color: #1ABC9C;
    .ui.header {
      color: white;
      border: unset;
      padding: 0 2rem;
      font-family: 'Noto Sans TC', sans-serif;
    }
    input {
      border-radius: unset;
      box-shadow: unset;
    }
    .ui.basic.button {
      width: 13rem;
      box-shadow: unset;
      border-radius: unset;
      font-family: 'Noto Sans TC', sans-serif;
      transition: filter 0.3s;
      &:hover {
        box-shadow: unset;
        filter: brightness(110%);
      }
      &:focus {
        box-shadow: unset;
      }
      &.login {
        background-color: #FECE55 !important;
        color: rgba(0, 0, 0, 0.54) !important;
      }
      &.facebook {
        color: white !important;
        background-color: #3B5998 !important;
      }
      &.google {
        color: white !important;
        background-color: #DD4B39 !important;
      }
    }
    .row {
      padding: 0.5rem 0 !important;
    }
    .switch {
      top: 20px;
      right: -30px;
      width: 60px;
      height: 60px;
      margin: unset;
      padding: unset;
      font-size: 2rem;
      position: absolute;
      border-radius: 50%;
      transition: filter 0.3s;
      background-color: #FECE55;
      box-shadow: rgba(0, 0, 0, 0.3) 1px 3px 5px 0px;
      &:hover {
        filter: brightness(110%);
      }
    }
  }
`;
