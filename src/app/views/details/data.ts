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
    cell: (element: AllAssetsModel) => `$${element.price.toFixed(2)}`,
  },
  {
    columnDef: 'change 24h',
    header: 'Change 24h',
    cell: (element: AllAssetsModel) => `${element.change_24h.toFixed(2)}%`,
  },
];
