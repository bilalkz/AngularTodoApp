import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {
  @Output() addTodoChange = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

  addTodo(todo){
    this.addTodoChange.next(todo)
  }

}

