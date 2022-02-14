import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasBoardComponent } from './das-board.component';

describe('DasBoardComponent', () => {
  let component: DasBoardComponent;
  let fixture: ComponentFixture<DasBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
