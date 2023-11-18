import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatoComponent } from './privato.component';

describe('PrivatoComponent', () => {
  let component: PrivatoComponent;
  let fixture: ComponentFixture<PrivatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
