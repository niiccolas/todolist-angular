import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { CompileTemplateMetadata } from '@angular/compiler';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          // transform: 'translateY(60px)'
          transform: 'translateX(60px)'
        }),
        animate(200, style({
          opacity: 1,
          transform: 'translateX(0px)'
        }))
      ]),

      transition(':leave', [
        animate(200, style({
          opacity: 0,
          transform: 'translateX(60px)',
        }))
      ]),
    ])
  ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  filter: string;

  constructor() { }

  ngOnInit() {
    this.filter = 'all';
    this.beforeEditCache = '';
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

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked);
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos
  }
}
