import { FormValidationResult } from 'lc-form-validation';
import * as toastr from 'toastr';
import { hashHistory } from 'react-router';
import { actionTypes } from '../../../common/constants/actionTypes';
import { FullApplication } from '../../../model';
import { memberAPI } from '../../../api/member';
import { memberFormValidation } from '../memberFormValidation';

export const saveMemberAction = (member: FullApplication) => (dispatch) => {
  memberFormValidation.validateForm(member)
    .then((formValidationResult) => {
      if (formValidationResult.succeeded) {
        saveMember(member);
      }
      dispatch(saveMemberActionCompleted(formValidationResult));
    });
};

const saveMember = (member: FullApplication) => {
  memberAPI.saveMember(member)
    .then(() => {
      toastr.success('Member saved.');
      hashHistory.goBack();
    })
    .catch(toastr.error);
};

const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
  type: actionTypes.SAVE_MEMBER,
  payload: formValidationResult,
});
