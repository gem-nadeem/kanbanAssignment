import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

export interface Task {
  id: any;
  value: string;
  priority: number;
  tag: string;
}
@Injectable({
  providedIn: "root",
})
export class TaskService {
  public newTasks: Task[] = [];
  public progressTasks: Task[] = [];
  public testTasks: Task[] = [];
  public closeTasks: Task[] = [];
  public allTask :any;
  private nextId = 0;
  constructor(private _http: HttpClient) {}

  create(item: Task) {
    item.id = ++this.nextId;

    //Update database
    switch (item.tag) {
      case "New Task":
        this.newTasks.push(item);
        break;
      case "In Progress":
        this.progressTasks.push(item);
        break;
      case "In Test":
        this.testTasks.push(item);
        break;
      case "Close":
        this.closeTasks.push(item);
        break;
    }

    // this.newTasks.push(item);
    // this._task$.next(Object.assign([], this.tasks));
    // console.log('Task :',this.tasks);

    console.log("New Task : ", this.newTasks);
    console.log("Progress Task : ", this.progressTasks);
    console.log("Test Task : ", this.testTasks);
    console.log("Close Task : ", this.closeTasks);
  }

  // remove(id: number) {
  //   this.tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       this.tasks.splice(index, 1);
  //     }
  //     this._task$.next(Object.assign([], this.tasks));
  //   });
  // }

//   getAllTask(){
//     this.showTask().subscribe(res =>{
//      this.allTask = res;
//     //  console.log('All Task :',this.allTask);
     
//    })
//  }
editIconClicked : boolean = false;
editTaskDetails = new Subject();
editTaskDetails$ = this.editTaskDetails.asObservable();
/**
 *@description this function is used for set existing data
 * to modal field when edit icon clicked
 * @param details
 * @method seteditFormDetails
 * @memberof EmpDirectoryService
 */
setTaskDetails(details) {
  this.editTaskDetails.next(details);
}

getAllTask(){
  this.showTask().subscribe(res =>{
   this.allTask = res;
   console.log('All Task :',this.allTask);
   
 })
}
  // Create task
  createTask(data : any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map(res =>{
      return res;
    }))
  }

  // Display task
  showTask(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map(res =>{
      return res;
    }))
  }

  // Update task
  updateTask(id :number,data:any){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map(res =>{
      return res;
    }))
  }

  // Delete task
  deleteTask(id:any){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map(res =>{
      return res;
    }))
  }
}
