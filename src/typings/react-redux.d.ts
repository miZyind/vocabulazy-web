import 'react-redux';
import { IStore } from '@models/index';
declare module 'react-redux' {
  interface Connect {
    <S, D, O>(
      mapStateToProps?: (state: IStore) => S,
      mapDispatchToProps?: (dispatch: Dispatch<any>) => D
    ): (component: Component<S & D & O>) => Component<O>;
  }
}
