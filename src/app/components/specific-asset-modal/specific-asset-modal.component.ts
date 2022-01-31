import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CryptingUpApiService} from '../../views/details/service/crypting-up-api.service';
import {SpecAssetDataModel} from './model/spec-asset-data-model';
import {SpecificAssetsModel} from './model/specific-assets-model';

@Component({
  selector: 'app-specific-asset-modal',
  templateUrl: './specific-asset-modal.component.html',
  styleUrls: ['./specific-asset-modal.component.scss']
})
export class SpecificAssetModalComponent implements OnInit {
  public assetData?: SpecificAssetsModel

  constructor(@Inject(MAT_DIALOG_DATA)
              public data: SpecAssetDataModel,
              private cryptingService: CryptingUpApiService,
              private dialogRef: MatDialogRef<SpecificAssetModalComponent>
  ) { }

  async ngOnInit(){
    this.assetData = await this.cryptingService.getSpecificAsset(this.data.asset_id);
  }

  close(){
    this.dialogRef.close()
  }
}
