import { Component, Input, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { TaskService } from 'src/app/service/task.service';
import { TaskData } from '../taskModel';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task ='';
  constructor(private _taskService: TaskService,
    private modalService : NgxSmartModalService) { }

  ngOnInit() {
  }

  onDelete(data : TaskData){
    this._taskService.deleteTask(data.id).subscribe(res =>{
       if(res){

        console.log("Task Deleted!!!");
        this._taskService.getAllTask();
       }
    })
  
  }
  onEditTask(data : TaskData){
    this._taskService.setTaskDetails(data);
    console.log('Data',data);
    this.modalService.getModal("taskModal").open();
    

  }

}
