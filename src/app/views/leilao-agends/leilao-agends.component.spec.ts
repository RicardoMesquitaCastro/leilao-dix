import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoAgendsComponent } from './leilao-agends.component';

describe('LeilaoAgendsComponent', () => {
  let component: LeilaoAgendsComponent;
  let fixture: ComponentFixture<LeilaoAgendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoAgendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeilaoAgendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
