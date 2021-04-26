import { useIntl } from "gatsby-plugin-react-intl"

const useCurrentLang = () => {
  const intl = useIntl()
  return intl.locale
}

export default useCurrentLang
