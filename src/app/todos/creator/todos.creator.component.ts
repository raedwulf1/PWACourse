import { Component, OnInit, Input } from '@angular/core';

import { ITodo, TStatus } from '../../structures/todos';
import { TodosService } from '../../services/todos.service';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-todos-creator',
  templateUrl: './todos.creator.component.html',
  animations: [
    trigger('openClose', [
      state('collapsed, void', style({height: '0px'})),
      state('expanded', style({height: '*'})),
      transition('collapsed <=> expanded', [animate(300, style({height: '*'})), animate(100)])
    ])
  ]
})

export class TodoscreatorComponent implements OnInit {


  @Input() id: string;

  public formState = 'collapsed';
  public todo: ITodo = {content: '', status: TStatus.Created};


  constructor(private todoS: TodosService) {

  }

  ngOnInit() {

  }

  save() {
    this.todoS.add(this.id, this.todo).then(() => {
      this.todo.content = '';
      this.todo.description = null;
      this.todo.status = TStatus.Created;
    });
  }

  label() {
    if (this.formState === 'collapsed') {
      return 'Agregar Nuevo Pendiente';
    } else if (this.formState === 'expanded') {
      return 'Ocultar Formulario';
    }
  }

  icon() {
    if (this.formState === 'collapsed') {
      return 'fa-plus';
    } else if (this.formState === 'expanded') {
      return 'fa-caret-up';
    }
  }

  toogleForm() {
    if (this.formState === 'collapsed') {
      this.formState = 'expanded';
    } else if (this.formState === 'expanded') {
      this.formState = 'collapsed';
    }
  }
}
