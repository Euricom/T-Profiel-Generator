interface State {
  isCookiesAllowed?: boolean;
}

interface Actions {
  allowCookies: () => void;
  disallowCookies: () => void;
}
