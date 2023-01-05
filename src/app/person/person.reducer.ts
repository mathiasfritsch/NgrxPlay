import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Person } from './person.model';
import * as PersonActions from './person.actions';

export const personsFeatureKey = 'persons';

export interface State extends EntityState<Person> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(PersonActions.addPerson,
    (state, action) => adapter.addOne(action.person, state)
  ),
  on(PersonActions.upsertPerson,
    (state, action) => adapter.upsertOne(action.person, state)
  ),
  on(PersonActions.addPersons,
    (state, action) => adapter.addMany(action.persons, state)
  ),
  on(PersonActions.upsertPersons,
    (state, action) => adapter.upsertMany(action.persons, state)
  ),
  on(PersonActions.updatePerson,
    (state, action) => adapter.updateOne(action.person, state)
  ),
  on(PersonActions.updatePersons,
    (state, action) => adapter.updateMany(action.persons, state)
  ),
  on(PersonActions.deletePerson,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PersonActions.deletePersons,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PersonActions.loadPersons,
    (state, action) => adapter.setAll(action.persons, state)
  ),
  on(PersonActions.clearPersons,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
