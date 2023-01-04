import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { loadUsers, loadUsersFinished } from '../users/actions/users.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadUsers());
  }
  finished() {
    this.store.dispatch(loadUsersFinished());
  }
}
