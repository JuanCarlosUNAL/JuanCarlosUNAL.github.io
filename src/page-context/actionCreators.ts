import { Dispatch } from "react"
import { Actions } from "./types"

export const toggleLanguageAction = (dispatch: Dispatch<Actions>) => () => {
  dispatch({
    type: "TOGGLE_LANGUAJE",
  })
}
