import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<string>();
  private taskService = inject(TasksService);



  onCompleteTask() {
    this.taskService.removeTask(this.task.id)
  }
}
