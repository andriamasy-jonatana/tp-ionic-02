import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  imgData: string;
  coordsDataLat: number;
  coordsDataLng: number;

  constructor(private alertController: AlertController,
              private camera: Camera,
              private geolocation: Geolocation) {}

  updateTitle() {
    this.title = 'Un nouveau titre';
  }

  async fireAlert() {
    // creation de l alerte
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    // quand l alerte sera masquée
    alert.onDidDismiss().then(() => console.log('alerte masquée'));

    // affichage de l alerte
    await alert.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
        console.log(imageData);
        this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (error) => {
      console.log('Error camera', error);
    });
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordsDataLat = resp.coords.latitude;
      this.coordsDataLng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
