import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWorkComponent } from './where-work.component';

describe('WhereWorkComponent', () => {
  let component: WhereWorkComponent;
  let fixture: ComponentFixture<WhereWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
