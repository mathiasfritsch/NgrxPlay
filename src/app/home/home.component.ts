import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increaseCounter } from '../lessons/actions/lesson.actions';
import {
  loadProducts,
  loadProductsFinished,
} from '../products/actions/products.actions';
import { AppState } from '../store';
import { loadUsers, loadUsersFinished } from '../users/actions/users.actions';
import {
  selectUserLoaded,
  selectProductLoaded,
} from '../users/selectors/user.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userLoaded$ = this.store.select(selectUserLoaded);
  productLoaded$ = this.store.select(selectProductLoaded);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadUsers());
  }
  finishedUser() {
    this.store.dispatch(loadUsersFinished());
  }
  startedUser() {
    this.store.dispatch(increaseCounter());
    this.store.dispatch(loadUsers());
  }
  finishedProduct() {
    this.store.dispatch(loadProductsFinished());
  }
  startedProduct() {
    this.store.dispatch(loadProducts());
  }
}
