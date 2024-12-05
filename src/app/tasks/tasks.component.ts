import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) username!: string;
  @Input({required:true}) userId!:string;
  isOnAddTask=false;

  constructor(private taskService:TasksService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId)
  }

  onCompleteTask(id:string){
    this.taskService.removeTask(id);
  }

  onStartAddTask(){
    this.isOnAddTask=true;
  }
  onCloseModal(){
    this.isOnAddTask=false;
  }
  onAddTask(taskData:NewTaskData){
    this.taskService.addTask(taskData,this.userId)
    this.isOnAddTask=false;
  }
}
