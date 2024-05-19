import { Dimensions } from 'react-native';

const MAX = 100;

export function vh(num: number): number{
  return Dimensions.get('window').height * (num/MAX);
}
export function vw(num: number): number{
  return Dimensions.get('window').width * (num/MAX);
}

export function vmax(num: number): number{
  return Math.max(vw(num), vh(num));
}
export function vmin(num: number): number{
  return Math.min(vw(num), vh(num));
}

export default {
  vh,
  vw,
  vmax,
  vmin
}