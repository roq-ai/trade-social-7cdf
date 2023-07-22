import { GetQueryInterface } from 'interfaces';

export interface AssetInterface {
  id?: string;
  name: string;
  price: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AssetGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
