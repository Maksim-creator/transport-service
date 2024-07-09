import {screenNames} from './screenNames.ts';

export type RootStackParamList = {
  [screenNames.LOCATION]: undefined;
  [screenNames.INFO]: undefined;
  [screenNames.BUS_ROUTES]: undefined;
  [screenNames.SEATS_AVAILABILITY]: {id: string};
  [screenNames.MAIN_STACK]: undefined;
  [screenNames.SEATS_STACK]: undefined;
};
