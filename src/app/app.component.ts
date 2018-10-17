import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: AppData = {
    todos: [
      {
        title: 'Eat food',
        completed: true
      },
      {
        title: 'Complete project',
        completed: false
      }
    ]
  };

  addTodo(todo){
    this.data.todos.push(
      {
        title:todo,
        completed:false
      }
      
    )
  }
}

export interface Todo {
  title: string;
  completed: boolean;
}
export interface AppData {
  todos: Array<Todo>;
}

