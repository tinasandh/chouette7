import { actionTypes } from '../../../common/constants/actionTypes';
import { FullApplication } from '../../../model';
import { memberAPI } from '../../../api/member';

export const fetchMembersAction = () => (dispatch) => {
  memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    });
};

const fetchMembersCompleted = (members: FullApplication[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});
