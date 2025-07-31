import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaskChart } from './employee-task-chart';

describe('EmployeeTaskChart', () => {
  let component: EmployeeTaskChart;
  let fixture: ComponentFixture<EmployeeTaskChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTaskChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTaskChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
