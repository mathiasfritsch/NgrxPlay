import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { loadUsers, loadUsersFinished } from '../actions/users.actions';

@Injectable()
export class UserEffects {
  loadUsersFinished$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadUsersFinished),
        tap((x) => console.log('finished load users'))
      ),
    { dispatch: false }
  );

  loadUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadUsers),
        tap((x) => console.log('load users'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
