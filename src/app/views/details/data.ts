import {AllAssetsModel} from "./model/assets-model";

export const columns = [
  {
    columnDef: 'symbol',
    header: 'Symbol',
    cell: (element: AllAssetsModel) => `${element.asset_id}`,
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: AllAssetsModel) => `${element.name}`,
  },
  {
    columnDef: 'price',
    header: 'Price USD',
    cell: (element: AllAssetsModel) => `${element.price}`,
  },
];
