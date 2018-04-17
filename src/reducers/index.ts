import { combineReducers } from 'redux';
import { FullApplication, MemberErrors } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';

export interface State {
  members: FullApplication[];
  member: FullApplication;
  memberErrors: MemberErrors;
};

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  memberErrors: memberErrorsReducer,
});
