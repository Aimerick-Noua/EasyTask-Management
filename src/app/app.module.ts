import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { CardComponent } from "./shared/card/card.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
        CardComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }