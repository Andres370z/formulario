import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeInformacionComponent } from './recibe-informacion.component';

describe('RecibeInformacionComponent', () => {
  let component: RecibeInformacionComponent;
  let fixture: ComponentFixture<RecibeInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibeInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
