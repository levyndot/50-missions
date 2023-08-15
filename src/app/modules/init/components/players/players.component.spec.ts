import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('UsernameComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersComponent],
    });
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
