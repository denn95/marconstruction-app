import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConstruction } from './general-construction';

describe('GeneralConstruction', () => {
  let component: GeneralConstruction;
  let fixture: ComponentFixture<GeneralConstruction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralConstruction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralConstruction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
