import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {AllAssetsModel, AssetsModel} from "./model/assets-model";
import {CryptingUpApiService} from "./service/crypting-up-api.service";
import {columns} from "./data";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public data?: AssetsModel;
  public length = 10;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50];
  public pageEvent: PageEvent | undefined;
  public ELEMENT_DATA: AllAssetsModel[] = [];
  columns = columns;

  dataSource = this.ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(
    private cryptingService: CryptingUpApiService
  ) { }

  ngOnInit(){
    this.getAllAssets(this.pageSize, 1);
  }

  async getAllAssets(size: number, start: number){
    this.data = await this.cryptingService.getAllAssets(size, start);
    this.dataSource = this.data?.assets || [];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
