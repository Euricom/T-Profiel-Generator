import { reactive } from 'vue';
import { Actions, State } from './types';
import * as Cookies from 'es-cookie';

const state = reactive<State>({
  isCookiesAllowed: !!Cookies.get('isCookiesAllowed'),
});

const actions: Actions = {
  allowCookies: () => {
    state.isCookiesAllowed = true;
    const expires: any = import.meta.env.COOKIE_EXPIRE_TIME;
    Cookies.set('isCookiesAllowed', 'true', { expires });
  },
  disallowCookies: () => {
    state.isCookiesAllowed = false;
    Cookies.remove('isCookiesAllowed');
  },
};

export default {
  state,
  actions,
};
