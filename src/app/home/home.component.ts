import {Component, OnInit} from '@angular/core';
import { ListsService } from '../services/lists.service';
import { trigger, style, state, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
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
export class HomeComponent implements OnInit {

  constructor(public listS: ListsService) {}

  ngOnInit() {
  }
}
