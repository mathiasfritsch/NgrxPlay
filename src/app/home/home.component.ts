import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadProducts,
  loadProductsFinished,
} from '../products/actions/products.actions';
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
  finishedUser() {
    this.store.dispatch(loadUsersFinished());
  }
  startedUser() {
    this.store.dispatch(loadUsers());
  }
  finishedProduct() {
    this.store.dispatch(loadProductsFinished());
  }
  startedProduct() {
    this.store.dispatch(loadProducts());
  }
}
