import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo, TStatus } from '../structures/todos';
import { TodosService } from '../services/todos.service';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
        transform: 'translateX(0)',
        opacity: 1
        }))
      ])
    ])
  ]
  // animations: [
  //   trigger('enterState', [
  //     transition('* => *', [ // each time the binding value changes// arreglar para que funcione con coreografia
  //       query(':enter', [
  //         style({ opacity: 0 }),
  //         stagger(100, [
  //           animate('0.5s', style({ opacity: 1 }))
  //         ])
  //       ], {optional: true})
  //     ])
  //   ])
  // ]
})

export class ListComponent implements OnInit {

  public listId: string;
  public todos: Observable<ITodo[]>;

  constructor(private route: ActivatedRoute,
  private todoS: TodosService) {

  }

  ngOnInit() {
    this.listId = this.route.snapshot.params.id;
    this.todos = this.todoS.getFromList(this.listId);
  }

  trackTodoObjects = (id, obj) => obj.id;
}
