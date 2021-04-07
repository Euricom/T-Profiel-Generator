import { reactive } from 'vue';
import { Actions, State } from './types';

const state = reactive<State>({});

const actions: Actions = {
  allowCookies: () => (state.isCookiesAllowed = true),
  disallowCookies: () => (state.isCookiesAllowed = false),
};

export default {
  state,
  actions,
};
