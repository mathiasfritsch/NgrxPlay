import { Action, createReducer, on } from '@ngrx/store';
import * as LessonActions from '../actions/lesson.actions';

export const lessonFeatureKey = 'lesson';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0,
};

export const reducer = createReducer(
  initialState,
  on(LessonActions.increaseCounter, (state) => ({
    ...state,
    counter: state.counter + 1,
  }))
);
