import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclareUnArrayComponent } from './ciclare-un-array.component';

describe('CiclareUnArrayComponent', () => {
  let component: CiclareUnArrayComponent;
  let fixture: ComponentFixture<CiclareUnArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiclareUnArrayComponent]
    });
    fixture = TestBed.createComponent(CiclareUnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
