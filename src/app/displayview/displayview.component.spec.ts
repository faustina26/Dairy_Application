import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayviewComponent } from './displayview.component';

describe('DisplayviewComponent', () => {
  let component: DisplayviewComponent;
  let fixture: ComponentFixture<DisplayviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
