import { Component, OnInit } from '@angular/core';

import {IList} from '../../structures/lists';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-list.creator',
  templateUrl: './list.creator.component.html'
})

export class ListCreatorComponent implements OnInit {

  public list: IList = {title: ''};

  constructor(private listS: ListsService) {

  }

  ngOnInit() {

  }

  save() {
    this.listS.add(this.list).then(() => {
      this.list.title = '';
    });
  }
}
