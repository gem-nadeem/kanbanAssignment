import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanGridComponent } from './kanban-grid.component';

describe('KanbanGridComponent', () => {
  let component: KanbanGridComponent;
  let fixture: ComponentFixture<KanbanGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
