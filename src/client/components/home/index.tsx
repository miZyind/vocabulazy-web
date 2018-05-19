// Node module
import React from 'react';
// Component
import Description from './description';

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
      </>
    );
  }
}

export default Menu;
