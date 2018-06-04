// Node module
import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Label, List, Icon } from 'semantic-ui-react';

type Props = {
  className?: string;
};

const facebookUrl = 'https://www.facebook.com/vocabulazy/';
const instagramUrl = 'https://www.facebook.com/vocabulazy/';

const DesktopList = () => (
  <List>
    <List.Item>
      <Label
        as='a'
        size='large'
        icon={<Icon size='large' name='facebook' circular />}
        content='Facebook'
        basic
        target='_blank'
        href={facebookUrl}
      />
    </List.Item>
    <List.Item>
      <Label
        as='a'
        size='large'
        icon={<Icon size='large' name='instagram' circular />}
        content='Instagram'
        basic
        target='_blank'
        href={instagramUrl}
      />
    </List.Item>
  </List>
);

const MobileList = () => (
  <>
    <a
      target='_blank'
      href={facebookUrl}
      children={<Icon size='large' name='facebook' circular />}
    />
    <a
      target='_blank'
      href={instagramUrl}
      children={<Icon size='large' name='instagram' circular />}
    />
  </>
);

const Footer = ({ className }: Props) => {
  const isMobileDisplay = innerWidth < 767;
  const align = isMobileDisplay ? 'center' : 'left';

  return (
    <Grid className={className} divided={isMobileDisplay} stackable>
      <Grid.Row>
        <Grid.Column textAlign={align} width='6'>
          <Header as='h2' content='隱私政策' />
        </Grid.Column>
        <Grid.Column textAlign={align} floated='right' width='4'>
          <Header as='h2' content='聯絡我們' />
          <Header as='h3' content='新北市永和區ＸＸ街' />
          <Header as='h3' content='tomliou7587@gmail.com' />
          <Header as='h3' content='02-86684818' />
        </Grid.Column>
        <Grid.Column textAlign={align} floated='right' width='4'>
          <Header as='h2' content='關注我們' />
          {isMobileDisplay ? <MobileList /> : <DesktopList />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default styled(Footer)`
  &&& {
    width: 100%;
    padding: 2rem;
    margin: unset;
    a {
      color: unset;
    }
    .ui.header {
      white-space: nowrap;
      font-family: 'Noto Sans TC', sans-serif;
    }
    .ui.large.basic.label {
      border: none;
      padding: unset;
    }
  }
`;
