import { Component, OnInit } from '@angular/core';
import { CameraPreview,
  CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';


@Component({
  selector: 'app-camerapreview',
  templateUrl: './camerapreview.page.html',
  styleUrls: ['./camerapreview.page.scss'],
})
export class CamerapreviewPage implements OnInit {

  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 100,
      width: window.screen.width,
      height: window.screen.height - 300,
      camera: 'back',
      tapPhoto: true,
      previewDrag: true,
      toBack: false,
      alpha: 1
    };

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }

  stopCam() {
    this.cameraPreview.stopCamera();
  }
}
