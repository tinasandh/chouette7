import { FullApplication } from '../../model';
import { members } from './mockData';

const baseURL = 'https://api.github.com/orgs/lemoncode';
let mockMembers = members;

const fetchMembers = (): Promise<FullApplication[]> => {
  return Promise.resolve(mockMembers);
};

/*const fetchMembersAsync = (): Promise<FullApplication[]> => {
  const membersURL = `${baseURL}/members`;

  return fetch(membersURL)
    .then((response) => (response.json()))
    .then(mapToMembers);
};

const mapToMembers = (githubMembers: any[]): FullApplication[] => {
  return githubMembers.map(mapToMember);
};

const mapToMember = (githubMember): FullApplication => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url,
  };
};
*/
const saveMember = (member: FullApplication): Promise<boolean> => {
  const index = mockMembers.findIndex(m => m.id === member.id);

  index >= 0 ?
    updateMember(member, index) :
    insertMember(member);

  return Promise.resolve(true);
};

const updateMember = (member: FullApplication, index: number) => {
  mockMembers = [
    ...mockMembers.slice(0, index),
    member,
    ...mockMembers.slice(index + 1),
  ];
};

const insertMember = (member: FullApplication) => {
  member.id = mockMembers.length;

  mockMembers = [
    ...mockMembers,
    member,
  ];
};

const fetchMemberById = (id: number): Promise<FullApplication> => {
  const member = mockMembers.find(m => m.id === id);

  return Promise.resolve(member);
}

export const memberAPI = {
  fetchMembers,
  //fetchMembersAsync,
  saveMember,
  fetchMemberById,
};
