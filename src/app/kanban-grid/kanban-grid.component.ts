
import { Component  , OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-kanban-grid',
  templateUrl: './kanban-grid.component.html',
  styleUrls: ['./kanban-grid.component.css']
})
export class KanbanGridComponent implements OnInit {
  
  constructor(private _taskService: TaskService,
    private modalService : NgxSmartModalService) { 
  }

  ngOnInit() {
    this._taskService.getAllTask();
  }

  @ViewChild("taskModal")
  taskModal: NgxSmartModalComponent;
  openTaskModal(data){
        this.modalService.getModal("taskModal").open();   
  }
}
