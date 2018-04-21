import { IStore } from '@models/index';
import 'react-redux';
declare module 'react-redux' {
  interface Connect {
    <P extends PropsUnion>(
      mapStateToProps?: (state: IStore, ownProps?: P['Own']) => P['State'],
      mapDispatchToProps?: (dispatch: Dispatch<any>, ownProps?: P['Own']) => P['Dispatch']
    ): <T extends P['Own']>(component: Component<P['State'] & P['Dispatch'] & T>) => Component<T>;
  }
}
