// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Embed, Header } from 'semantic-ui-react';

type Props = {
  className?: string;
  isMobileDisplay: boolean;
};

const Usage = ({ className, isMobileDisplay }: Props) => (
  <Grid className={className} stackable columns='2'>
    <Grid.Column className='video' width='10'>
      <Embed source='youtube' />
    </Grid.Column>
    <Grid.Column className='info' width='6' style={{ minHeight: isMobileDisplay ? '200px' : 'unset' }}>
      <Header as='h1' textAlign='center'>
        全新研發背誦模式
        <Header.Subheader children='即便通勤也能專心學習' />
      </Header>
    </Grid.Column>
  </Grid>
);

export default styled(Usage)`
  &&& {
    margin: unset;
    background-color: white;
    border-bottom: 1px solid #979797;
    .column.video {
      padding: 2rem 3rem !important;
      @media only screen and (max-width: 767px) { padding: unset !important; }
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: unset;
      .ui.header { font-family: 'Noto Sans TC', sans-serif; }
    }
  }
`;
