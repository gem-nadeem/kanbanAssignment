// import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { timeStamp } from 'console';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';
import { Task,TaskService } from '../service/task.service';

@Component({
  selector: 'app-kanban-grid',
  templateUrl: './kanban-grid.component.html',
  styleUrls: ['./kanban-grid.component.css']
})
export class KanbanGridComponent implements OnInit {

  // task$ :Observable<Task[]>;
  newTasks = this._taskService.newTasks;
  progressTasks = this._taskService.progressTasks;
  testTasks= this._taskService.testTasks;
  closeTasks= this._taskService.closeTasks;
  allTask :any;

  // @ViewChild()
  constructor(private _taskService: TaskService,
    private modalService : NgxSmartModalService) { 
    // console.log('Tasks :', this.newTasks);
    // this.getAllTask();
    
  }

  ngOnInit() {
    this._taskService.getAllTask();
  }

  @ViewChild("taskModal")
  taskModal: NgxSmartModalComponent;
  openTaskModal(data){
        this.modalService.getModal("taskModal").open();
        
        
       
  }

  onDelete(data : any){
    this._taskService.deleteTask(data.id).subscribe(res =>{
       if(res){

        console.log("Task Deleted!!!");
        this._taskService.getAllTask();
       }
    })
  
  }
  onEditTask(data : any){
    this._taskService.setTaskDetails(data);
    console.log('Data',data);
    this.modalService.getModal("taskModal").open();
    

  }
}
