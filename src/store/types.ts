export interface State {
  isCookiesAllowed?: boolean;
}

export interface Actions {
  allowCookies: () => void;
  disallowCookies: () => void;
}

export type Store = {
  state: State;
  actions: Actions;
};
