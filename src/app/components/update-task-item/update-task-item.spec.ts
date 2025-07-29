import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskItem } from './update-task-item';

describe('UpdateTaskItem', () => {
  let component: UpdateTaskItem;
  let fixture: ComponentFixture<UpdateTaskItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaskItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaskItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
