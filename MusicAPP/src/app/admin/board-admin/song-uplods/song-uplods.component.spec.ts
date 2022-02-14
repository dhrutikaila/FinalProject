import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongUplodsComponent } from './song-uplods.component';

describe('SongUplodsComponent', () => {
  let component: SongUplodsComponent;
  let fixture: ComponentFixture<SongUplodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongUplodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongUplodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
