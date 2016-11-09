import { Component, OnInit  } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service';

import { IPerson} from '../../shared/interfaces';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  people: IPerson[] = [];

  constructor(public peopleService: PeopleService, public navCtrl: NavController) {}

  ngOnInit() {
      this.peopleService.getPeople()
          .subscribe((data: IPerson[]) => this.people = data);
  }

}
