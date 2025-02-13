import { Component, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import {  TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common';
import { User } from './user/user.model';
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { 
  users = DUMMY_USERS;
  selectedUser?:User;


  onSelectUser(userId:string){
    this.selectedUser=this.users.find((user)=>user.id===userId);      
  }

}
