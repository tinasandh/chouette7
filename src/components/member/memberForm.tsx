import * as React from 'react';
import { FullApplication, MemberErrors } from '../../model';
import { Input, Button } from '../../common/components/form';

import RadioButtonGroup from '../radio-button/radio-button-group';
import RadioButton from '../radio-button/radio-button';


interface Props {
  member: FullApplication;
  memberErrors: MemberErrors;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberForm: React.StatelessComponent<Props> = (props) => {


    const listItems = props.member.referrals.map((ref) =>
        (<div key={ref.id}>{ref.description}
                <RadioButtonGroup name="gender" defaultSelected="male">
                    <RadioButton label="Bevilja" value="accepted" />
                    <RadioButton label="Avslå" value="refused" />

                </RadioButtonGroup>
        </div>

        )
    );
  return (
    <form>
      <h1>{props.member.firstName} {props.member.surName}</h1>


      <Input
        name="firstName"
        label="Motivering"
        value={props.member.firstName}
        onChange={props.onChange}
        error={
          props.memberErrors.firstName.succeeded ?
            '' :
            props.memberErrors.firstName.errorMessage
        }
      />

      <Input
        name="avatar_url"
        label="Avatar Url"
        value={props.member.surName}
        onChange={props.onChange}
      />
        <div>{listItems}</div>


      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  );
};
