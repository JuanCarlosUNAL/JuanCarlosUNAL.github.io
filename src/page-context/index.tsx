import React from 'react';
import { Helmet } from "react-helmet";
import { Maybe } from '../../gatsby-graphql';
import reducer, {initialState} from './pageDataStore';
import { PageDataType } from './types';
import { toggleLanguageAction } from "./actionCreators";

export const PageContext = React.createContext<Maybe<PageDataType>>(null);

const PageProvider: React.FC = ({ children }) => {
  const [pageData, dispatch] = React.useReducer(reducer, initialState);

  const values = {
    pageData,
    toggleChangeLanguage: toggleLanguageAction(dispatch),
  };

  return (
    <PageContext.Provider value={values}>
      <Helmet>
        <html lang={pageData.lang} />
      </Helmet>
      {children}
    </PageContext.Provider>
  );
}

export default PageProvider;

