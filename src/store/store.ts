import { quickStore } from 'redux-store-generator';
import { IMainStore } from './types';
import { initialState } from './initialState';

const { actions, store } = quickStore<IMainStore>(initialState, []);

export { actions, store };
