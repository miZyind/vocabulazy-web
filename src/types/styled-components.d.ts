import 'styled-components';
declare module 'styled-components' {
  interface ThemedBaseStyledInterface<T> {
    <P extends { [prop: string]: any; theme?: T }>(component: React.ComponentType<P>): ThemedStyledFunction<P, T, Exclude<P, 'theme'>>;
  }
}
