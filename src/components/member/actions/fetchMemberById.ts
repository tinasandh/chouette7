import { actionTypes } from '../../../common/constants/actionTypes';
import { FullApplication } from '../../../model';
import { memberAPI } from '../../../api/member';

export const fetchMemberByIdAction = (id: number) => (dispatch) => {
  memberAPI.fetchMemberById(id)
    .then((member) => {
      dispatch(fetchMemberByIdCompleted(member));
    });
};

const fetchMemberByIdCompleted = (member: FullApplication) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
});
