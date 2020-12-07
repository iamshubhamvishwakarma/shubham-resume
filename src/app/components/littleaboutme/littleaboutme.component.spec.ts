import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleaboutmeComponent } from './littleaboutme.component';

describe('LittleaboutmeComponent', () => {
  let component: LittleaboutmeComponent;
  let fixture: ComponentFixture<LittleaboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleaboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
