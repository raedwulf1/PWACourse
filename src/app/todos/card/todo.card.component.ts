import { Component, OnInit, Input } from '@angular/core';
import { ITodo, TStatus } from '../../structures/todos';
import { trigger, animate, style, state, transition} from '@angular/animations';
import { TodosService } from '../../services/todos.service';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo.card.component.html',
  animations: [
    trigger('statusAnimation', [
      state('0,void', style({
        transform: 'translateX(0)', opacity: 1})
      ),
      state('1', style({
        transform: 'translateX(-100px)', opacity: 0})),
      transition('0 <=> 1', [
        animate(150, style({transform: 'translateX(0)', opacity: 1})),
        animate(150)
      ])
    ]),
    trigger('pressAnimation', [
      state('up,void', style({
        transform: 'translateX(0)'
      })),
      state('down', style({
        transform: 'translateX(-100px)'
      })),
      transition('up <=> down', [
        animate(100, style({transform: 'translateX(0)'})),
        animate(100)
      ])
    ])
  ]
})

export class TodoCardComponent implements OnInit {
  public press = 'up';
  public moment = moment;
  @Input() todo: ITodo;
  @Input() listId: string;
  constructor(private todoS: TodosService) {
  }

  ngOnInit() {

  }

  completed() {
    this.todo.status = TStatus.Completed;
    this.todoS.update(this.listId, this.todo);
  }
}
