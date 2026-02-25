import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaService } from './area-service';

describe('AreaService', () => {
  let component: AreaService;
  let fixture: ComponentFixture<AreaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
