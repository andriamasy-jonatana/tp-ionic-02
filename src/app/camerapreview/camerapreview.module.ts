import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerapreviewPageRoutingModule } from './camerapreview-routing.module';

import { CamerapreviewPage } from './camerapreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerapreviewPageRoutingModule
  ],
  declarations: [CamerapreviewPage]
})
export class CamerapreviewPageModule {}
