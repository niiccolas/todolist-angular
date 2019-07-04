import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: object[];
  todoTitle: string;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Go to bed early',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Learn Java',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'Buy pizza',
        completed: false,
        editing: false,
      },
    ];
  }

  addTodo(): void {
    // PREVENT EMPTY STRINGS FROM BEING ADDED
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false
    });

    // CLEAR TEXTBOX AFTER PRESSING ENTER
    this.todoTitle = '';
    this.idForTodo++;
  }
}
