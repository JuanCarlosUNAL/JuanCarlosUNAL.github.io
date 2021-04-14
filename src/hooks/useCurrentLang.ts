import { useIntl } from "gatsby-plugin-react-intl";

export default const useCurrentLang = () => {
  const intl = useIntl();
  return intl.locale;
}
