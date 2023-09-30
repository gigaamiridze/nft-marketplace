import { INFTItem } from './NFT';

export interface IRootStackParams {
  Home: undefined;
  Details: { data: INFTItem };
  [key: string]: undefined | { data: INFTItem };
}
