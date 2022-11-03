
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSmartModalService } from "ngx-smart-modal";
import { Observable } from "rxjs";
import { TaskData } from "../kanban-grid/taskModel";
import { Task, TaskService } from "../service/task.service";

@Component({
  selector: "app-kanban-board",
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent implements OnInit {
  tasks$: Observable<Task[]>;
  taskModelObj: TaskData = new TaskData();
  taskForm = this.fb.group({
    id: [""],
    value: ["", Validators.required],
    priority: ["", Validators.required],
    tag: ["", Validators.required],
  });

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private _taskService: TaskService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getTaskDetails();
  }

  getTaskDetails(){
    this._taskService.editTaskDetails$.subscribe((data : any)=>{
      if(data){
       this._taskService.editIconClicked= true;
       this.taskForm.get('id').setValue(data.id);
       this.taskForm.get('value').setValue(data.value);
       this.taskForm.get('priority').setValue(data.priority);
       this.taskForm.get('tag').setValue(data.tag);
      }else{
       this._taskService.editIconClicked= false;
       this.taskForm.get('value').setValue('');
       this.taskForm.get('priority').setValue('');
       this.taskForm.get('tag').setValue('');
      }
     })
  }
  openTaskModal() {
    this._taskService.setTaskDetails(null);
    this.ngxSmartModalService.getModal("taskModal").open();
    

  }
  onSubmit() {
    this.taskModelObj.value = this.taskForm.value.value;
    this.taskModelObj.priority = this.taskForm.value.priority;
    this.taskModelObj.tag = this.taskForm.value.tag;
   

    this._taskService.createTask(this.taskModelObj).subscribe(
      (res) => {
        this._taskService.getAllTask();
      },
      (err) => {
        alert("Something went wrong");
      }
    );
    this.taskForm.reset();
    this.ngxSmartModalService.getModal("taskModal").close();
  }
  onUpdate(){ 
     this.taskModelObj.id=this.taskForm.value.id;
    this.taskModelObj.value = this.taskForm.value.value;
    this.taskModelObj.priority = this.taskForm.value.priority;
    this.taskModelObj.tag = this.taskForm.value.tag;

    this._taskService.updateTask(this.taskModelObj.id,this.taskModelObj).subscribe( res =>{
        this._taskService.getAllTask();
        
    },err =>{
      alert(err);
      
    });
    this.taskForm.reset();
    this.ngxSmartModalService.getModal("taskModal").close();
     
  }
}


