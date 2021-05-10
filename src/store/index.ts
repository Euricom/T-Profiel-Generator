import { reactive } from 'vue';
import { Actions, ExportExtension, ExportFormat, State } from './types';
import * as Cookies from 'es-cookie';

const state = reactive<State>({
  isCookiesAllowed: !!Cookies.get('isCookiesAllowed'),
  exportParameters: {
    fullNameVisible: true,
    fullNameColor: '1976D2',
    fillColor: '1976D2',
    borderVisible: true,
    borderColor: '1976D2',
    backgroundTransparent: true,
    exportExtensions: [ExportExtension.jpg, ExportExtension.png],
    exportFormats: [ExportFormat.xs, ExportFormat.s, ExportFormat.m],
  },
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
