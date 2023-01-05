import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLesson from '../reducers/lesson.reducer';

export const selectLessonState = createFeatureSelector<fromLesson.State>(
  fromLesson.lessonFeatureKey
);
