import { Reducer } from 'react';
import { Actions, StateType } from './types';

export const initialState: StateType = {
  lang: 'en',
};

const toggleLanguage = (state: StateType): StateType => ({
  ...state,
  lang: state.lang === "en" ? "es" : "en"
})

const reducer: Reducer<StateType, Actions> = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_LANGUAJE': return toggleLanguage(state);
    default: return state;
  }
}

export default reducer;

