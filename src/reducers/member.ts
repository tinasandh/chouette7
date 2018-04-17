import { actionTypes } from '../common/constants/actionTypes';
import { FullApplication } from '../model';
import { MemberFieldChangePayload } from '../components/member/actions/memberFieldChange';

const createEmptyMember = (): FullApplication => ({
  id: -1,
  firstName: 'test',
  surName: 'test2',
    referrals: []
});

export const memberReducer = (state = createEmptyMember(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBER_BY_ID_COMPLETED:
      return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.UPDATE_MEMBER_FIELD:
      return handleUpdateMemberField(state, action.payload);
  }

  return state;
};

const handleFetchMemberByIdCompleted = (state: FullApplication, payload: FullApplication): FullApplication => {
  return payload;
};

const handleUpdateMemberField = (state: FullApplication, payload: MemberFieldChangePayload): FullApplication => {

  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.value,
  };
};
