import { NgModule } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerapreviewPageRoutingModule } from './camerapreview-routing.module';

import { CamerapreviewPage } from './camerapreview.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerapreviewPageRoutingModule
  ],
  declarations: [CamerapreviewPage],
  providers: [CameraPreview, Camera, Location]
})
export class CamerapreviewPageModule {}
