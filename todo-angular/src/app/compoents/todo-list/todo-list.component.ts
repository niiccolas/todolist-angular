import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: object[];

  constructor() { }

  ngOnInit() {
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

}
