import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [Camera, Geolocation, LocalNotifications]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    // le title doit être undefined à l'initialisation
    expect(component.title).toBeUndefined();
  });

  it('change title', () => {
    component.title = 'Mon Titre';
    // test pour voir que le titre est 'Mon titre ensuite'
    expect(component.title).toBe('Mon Titre');
  });

  it('update title', () => {
    // lancement de la mise à jour du title
    component.updateTitle();
    // on verifie que le title soit egale a un nouveau titre a la mise a jour
    expect(component.title).toBe('Un nouveau titre');
  });
});
