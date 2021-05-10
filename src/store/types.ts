export interface State {
  isCookiesAllowed?: boolean;
  exportParameters: ExportParameters;
}

export interface Actions {
  allowCookies: () => void;
  disallowCookies: () => void;
}

export type Store = {
  state: State;
  actions: Actions;
};

export interface ExportParameters {
  fullNameVisible: boolean;
  fullNameColor: string;
  fillColor: string;
  borderVisible: boolean;
  borderColor: string;
  backgroundTransparent: boolean;
  exportFormats: ExportFormat[];
  exportExtensions: ExportExtension[];
}

export enum ExportFormat {
  xs = '40 x 40',
  s = '80 x 80',
  m = '400 x 400',
}

export enum ExportExtension {
  jpg = 'jpg',
  png = 'png',
}
