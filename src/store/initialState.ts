import { IMainStore } from './types';

export const initialState: IMainStore = {
  groups: {
    '1': {
      id: '1',
      name: 'Group 1',
      description: 'Group 1 description',
      priority: 1,
    },
    '2': {
      id: '2',
      name: 'Group 2',
      description: 'Group 2 description',
      priority: 2,
    },
  },
};
