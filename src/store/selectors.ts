import { createSelector } from 'reselect';
import { IMainStore } from './types';

export const $i = (state: IMainStore) => state;

export const $rawGroups = createSelector($i, (state: IMainStore) =>state.groups); // prettier-ignore

export const $groups = createSelector($rawGroups, (groups) => {
  return Object.values(groups);
});
