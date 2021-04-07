import { reactive } from 'vue';

const state = reactive<State>({});

const actions: Actions = {
  allowCookies: () => (state.isCookiesAllowed = true),
  disallowCookies: () => (state.isCookiesAllowed = false),
};

export default {
  state,
  actions,
};