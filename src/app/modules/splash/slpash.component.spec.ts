import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpashComponent } from './slpash.component';

describe('SlpashComponent', () => {
  let component: SlpashComponent;
  let fixture: ComponentFixture<SlpashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlpashComponent]
    });
    fixture = TestBed.createComponent(SlpashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
