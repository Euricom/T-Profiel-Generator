export interface State {
  isCookiesAllowed?: boolean;
}

export interface Actions {
  allowCookies: () => void;
  disallowCookies: () => void;
}
