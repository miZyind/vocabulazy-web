// Node module
import React from 'react';
// Component
import Description from './description';
import Usage from './usage';
import Feature from './feature';
import Footer from './footer';

type Props = {
  isMobileDisplay: boolean;
};

class Menu extends React.Component<Props> {
  public render() {
    const {
      isMobileDisplay
    } = this.props;

    return (
      <>
        <Description isMobileDisplay={isMobileDisplay} />
        <Usage isMobileDisplay={isMobileDisplay} />
        <Feature />
        <Footer />
      </>
    );
  }
}

export default Menu;
