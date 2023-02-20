import { Component } from '@angular/core';
import { IToDo } from './interfaces/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  toDoList: IToDo[] = [
    { task: "Clean House", completed: true },
    { task: "Do Homework", completed: false },
    { task: "Go Grocery Shopping", completed: true },
    { task: "Pay Bills", completed: false },
    { task: "Walk Dog", completed: false }];

  addTask(description: string) {
    this.toDoList.push({
      task: description,
      completed: false
    });
  }

  completeTask(todo: IToDo) {
    let taskToUpdate = this.toDoList.indexOf(todo);
    todo.completed = true;
    this.toDoList[taskToUpdate] = todo;
  };
}

