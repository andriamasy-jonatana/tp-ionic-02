import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;

  constructor(private alertController: AlertController) {}

  updateTitle() {
    this.title = 'Un nouveau titre';
    // this.user = this.loginService.login('identification', 'name', 'P@ssw0rd');
  }

  async fireAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    alert.onDidDismiss().then(() => console.log('alerte masquée'));

    await alert.present();
  }

  /*maNouvelleMethodeQuiNeSeraPasTeste() {
    this.title = 'Mon nouveau titre';
  }*/

}
