import React from 'react';
import { Helmet } from "react-helmet";
import { Maybe, SitePageContextIntl } from '../../gatsby-graphql';
import reducer, {initialState} from './pageDataStore';
import { PageDataType } from './types';
import { toggleLanguageAction } from "./actionCreators";

export const PageContext = React.createContext<Maybe<PageDataType>>(null);

interface PageProviderProps {
  pageContext: SitePageContextIntl;
}

const PageProvider: React.FC<PageProviderProps> = ({ children, pageContext }) => {
  const [pageData, dispatch] = React.useReducer(reducer, initialState);

  const values = {
    pageData,
    toggleChangeLanguage: toggleLanguageAction(dispatch),
  };

  return (
    <PageContext.Provider value={values}>
      <Helmet>
        <html lang={pageContext.language || "en"} />
      </Helmet>
      {children}
    </PageContext.Provider>
  );
}

export default PageProvider;

