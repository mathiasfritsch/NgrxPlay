import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Person } from './person.model';

export const loadPersons = createAction(
  '[Person/API] Load Persons', 
  props<{ persons: Person[] }>()
);

export const addPerson = createAction(
  '[Person/API] Add Person',
  props<{ person: Person }>()
);

export const upsertPerson = createAction(
  '[Person/API] Upsert Person',
  props<{ person: Person }>()
);

export const addPersons = createAction(
  '[Person/API] Add Persons',
  props<{ persons: Person[] }>()
);

export const upsertPersons = createAction(
  '[Person/API] Upsert Persons',
  props<{ persons: Person[] }>()
);

export const updatePerson = createAction(
  '[Person/API] Update Person',
  props<{ person: Update<Person> }>()
);

export const updatePersons = createAction(
  '[Person/API] Update Persons',
  props<{ persons: Update<Person>[] }>()
);

export const deletePerson = createAction(
  '[Person/API] Delete Person',
  props<{ id: string }>()
);

export const deletePersons = createAction(
  '[Person/API] Delete Persons',
  props<{ ids: string[] }>()
);

export const clearPersons = createAction(
  '[Person/API] Clear Persons'
);
