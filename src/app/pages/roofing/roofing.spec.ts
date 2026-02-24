import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roofing } from './roofing';

describe('Roofing', () => {
  let component: Roofing;
  let fixture: ComponentFixture<Roofing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roofing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roofing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
