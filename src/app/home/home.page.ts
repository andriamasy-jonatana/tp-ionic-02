import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;

  constructor() {}

  updateTitle() {
    this.title = 'Un nouveau titre';
    // this.user = this.loginService.login('identification', 'name', 'P@ssw0rd');
  }

  /*maNouvelleMethodeQuiNeSeraPasTeste() {
    this.title = 'Mon nouveau titre';
  }*/

}
