// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Header } from 'semantic-ui-react';
// Asset
import wireframe from '@assets/wireframe.png';

type Props = {
  className?: string;
};

const Feature = ({ className }: Props) => (
  <Grid className={className} textAlign='center' stackable>
    <Grid.Row className='title'>
      <Grid.Column>
        <Header as='h1' content='產品特色' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row className='feature' columns='3'>
      <Grid.Column>
        <Image circular src={wireframe} />
        <Header as='h3' content='讓你自由決定自己想背的東西成績永遠好棒棒' />
      </Grid.Column>
      <Grid.Column >
        <Image circular src={wireframe} />
        <Header as='h3' content='讓你自由決定自己想背的東西成績永遠好棒棒' />
      </Grid.Column>
      <Grid.Column >
        <Image circular src={wireframe} />
        <Header as='h3' content='讓你自由決定自己想背的東西成績永遠好棒棒' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default styled(Feature)`
  &&& {
    padding: 2rem;
    width: 100%;
    margin: unset;
    background-color: #d8d8d8;
    border-bottom: 1px solid #979797;
    .ui.header { font-family: 'Noto Sans TC', sans-serif; }
    .row.title>.column {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .row.feature>.column {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
      img {
        width: 150px;
        height: 150px;
        margin: auto;
      }
    }
  }
`;
