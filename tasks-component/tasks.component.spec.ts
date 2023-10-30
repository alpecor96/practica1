import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponentComponent } from './tasks.component';

describe('TasksComponentComponent', () => {
  let component: TasksComponentComponent;
  let fixture: ComponentFixture<TasksComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksComponentComponent]
    });
    fixture = TestBed.createComponent(TasksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
