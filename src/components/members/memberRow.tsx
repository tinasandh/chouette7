import * as React from 'react';
import { Link } from 'react-router';
import { FullApplication } from '../../model';

interface Props {
  member: FullApplication;
}

export const MemberRow: React.StatelessComponent<Props> = ({ member }) => {
  return (
    <tr>
      <td>
        <span>{member.surName}</span>
      </td>
      <td>
        <Link
          to={`/member/${member.id}`}
        >
          {member.id}
        </Link>
      </td>
      <td>
        <span>{member.firstName}</span>
      </td>
    </tr>
  );
};
