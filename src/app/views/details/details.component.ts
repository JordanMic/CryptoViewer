import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {AllAssetsModel, AssetsModel} from "./model/assets-model";
import {CryptingUpApiService} from "./service/crypting-up-api.service";
import {columns} from "./data";
import {MatDialog} from "@angular/material/dialog";
import {SpecificAssetModalComponent} from '../../components/specific-asset-modal/specific-asset-modal.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public data?: AssetsModel;
  public length = 1000;
  public pageSize = 20;
  public pageSizeOptions: number[] = [5, 10, 25, 50];
  public pageIndex = 1;
  public pageEvent: PageEvent | undefined;
  public ELEMENT_DATA: AllAssetsModel[] = [];
  columns = columns;

  dataSource = this.ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(
    private cryptingService: CryptingUpApiService,
    private dialog: MatDialog
  ) { }

 async ngOnInit(){
    this.data = await this.cryptingService.getNumberAllAssets();
    this.length = this.data?.next || 1
    this.getAllAssets(this.pageSize, this.length)
  }

  async getAllAssets(size: number | undefined, start: number | undefined){
    this.data = await this.cryptingService.getAllAssets(size || this.pageSize, this.pageSize * (start || 1));
    this.dataSource = this.data?.assets || [];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  openModal(assetId: string){

    this.dialog.open(SpecificAssetModalComponent, {
      width: '60%',
      height: 'auto',
      data: {
        asset_id: assetId
      }
    });
  }

}
