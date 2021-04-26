import React from "react"
import "./src/global-styles.scss"
import PageProvider from "./src/page-context"

export const wrapPageElement = ({ element, props }) => (
  <PageProvider {...props}>{element}</PageProvider>
)
