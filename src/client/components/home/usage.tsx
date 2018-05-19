// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Embed, Header } from 'semantic-ui-react';

type Props = {
  className?: string;
};

const Usage = ({ className }: Props) => (
  <Grid className={className} stackable columns={2}>
    <Grid.Column className='video'>
      <Embed source='youtube' />
    </Grid.Column>
    <Grid.Column className='info'>
      <Header as='h1' textAlign='center'>
        全新研發背誦模式
        <Header.Subheader children='即便通勤也能專心學習' />
      </Header>
    </Grid.Column>
  </Grid>
);

export default styled(Usage) `
  &.ui.grid {
    margin: unset;
    && .video {
      padding: unset !important;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: unset !important;
      min-height: 100px;
      .ui.header {
        font-family: 'Noto Sans TC', sans-serif;
      }
    }
  }
`;
