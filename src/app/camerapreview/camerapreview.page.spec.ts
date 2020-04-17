import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamerapreviewPage } from './camerapreview.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import {CommonModule, Location} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';

describe('CamerapreviewPage', () => {
  let component: CamerapreviewPage;
  let fixture: ComponentFixture<CamerapreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerapreviewPage ],
      imports: [IonicModule.forRoot(), CommonModule, RouterTestingModule],
      providers: [CameraPreview, Location]
    }).compileComponents();

    fixture = TestBed.createComponent(CamerapreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
