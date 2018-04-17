import { actionTypes } from '../common/constants/actionTypes';
import { FullApplication } from '../model';

export const membersReducer = (state: FullApplication[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBERS_COMPLETED:
      return handleFetchMembersCompleted(state, action.payload);
  }

  return state;
};

const handleFetchMembersCompleted = (state: FullApplication[], payload: FullApplication[]) => {
  return payload;
};
