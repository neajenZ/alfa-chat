import { IAppTheme } from '@types/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends IAppTheme {}
}