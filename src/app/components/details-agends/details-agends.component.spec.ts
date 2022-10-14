import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAgendsComponent } from './details-agends.component';

describe('DetailsAgendsComponent', () => {
  let component: DetailsAgendsComponent;
  let fixture: ComponentFixture<DetailsAgendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAgendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAgendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
