// Node module
import React from 'react';
import styled from 'styled-components';
import { Transition, Modal, Header, Grid, Input, Button } from 'semantic-ui-react';

type Props = {
  className?: string;
  isModalOpen: boolean;
};

class SignModal extends React.PureComponent<Props> {
  public render() {
    // tslint:disable:jsx-no-lambda
    const { className, isModalOpen } = this.props;
    return (
      <Transition duration={300} unmountOnHide>
        <Modal className={className} open={isModalOpen} basic>
          <Header content='登入' />
          <Modal.Content>
            <Grid textAlign='center'>
              <Grid.Row>
                <Input placeholder='Username' />
              </Grid.Row>
              <Grid.Row>
                <Input placeholder='Password' />
              </Grid.Row>
              <Grid.Row>
                <Button content='登入' basic />
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Button className='switch' content='+' />
        </Modal>
      </Transition>
    );
  }
}

export default styled(SignModal)`
  &&& {
    width: 250px;
    border-radius: 1%;
    background-color: #1ABC9C;
    .ui.header {
      border: unset;
      padding: 2.5rem 2rem 1.5rem 2rem;
      font-family: 'Noto Sans TC', sans-serif;
    }
    .ui.basic.button {
      width: 12rem;
      border-radius: unset;
      background-color: #FECE55 !important;
      color: rgba(0, 0, 0, 0.54) !important;
      font-family: 'Noto Sans TC', sans-serif;
    }
    .content {
      padding-bottom: 2.5rem;
    }
    .switch {
      top: 20px;
      right: -30px;
      width: 60px;
      height: 60px;
      margin: unset;
      position: absolute;
      border-radius: 50%;
      background-color: #FECE55;
      box-shadow: rgba(0, 0, 0, 0.3) 1px 3px 5px 0px
    }
  }
`;
