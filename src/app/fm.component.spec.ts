import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {fmComponent} from "./fm.component";

describe('50mComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [fmComponent],
    }).compileComponents();
  });

  it('should create the 50m', () => {
    const fixture = TestBed.createComponent(fmComponent);
    const fm = fixture.componentInstance;
    expect(fm).toBeTruthy();
  });
});
