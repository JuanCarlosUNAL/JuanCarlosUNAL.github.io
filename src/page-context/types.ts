
export type SupportedLangujes = 'es' | 'en';
export type SupportedThemes = 'dark' | 'light'; 

export interface StateType {
  lang: SupportedLangujes,
}

export interface PageDataType {
  pageData: StateType,
  toggleChangeLanguage: (lang: SupportedLangujes) => void,
}

interface ActionType<Name extends string, Payload = unknown>{
  type: Name;
  payload?: Payload;
}

export type Actions = 
  ActionType<'TOGGLE_LANGUAJE'> |
  ActionType<'SET_THEME', SupportedThemes>;
