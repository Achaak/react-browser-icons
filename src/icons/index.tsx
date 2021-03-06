import Chrome from "./components/Chrome"
import Safari from "./components/Safari"
import Opera from "./components/Opera"
import Firefox from "./components/Firefox"
import Edge from "./components/Edge"
import IE from "./components/IE"
import Brave from "./components/Brave"
import Samsung from "./components/Samsung"
import Chromium from "./components/Chromium"
import React from "react";

const lastVersion = {
  "Chrome": Chrome,
  "Safari": Safari,
  "Mobile Safari": Safari,
  "Opera": Opera,
  "Firefox": Firefox,
  "Edge": Edge,
  "IE": IE,
  "Brave": Brave,
  "Samsung": Samsung,
  "Chromium": Chromium,
}

export const BrowsersList = ["Chrome", "Safari", "Mobile Safari", "Opera", "Firefox", "Edge", "IE", "Brave", "Samsung", "Chromium"]
export type Browsers = keyof typeof lastVersion

type getBrowserIcon = {
  browser: Browsers,
  className?: string,
  style?: React.CSSProperties,
  size: number | string,
}
export const getBrowserIcon = ({ browser, className, style, size }: getBrowserIcon) => {
  const Component = lastVersion[browser]

  if(!Component) return null
  return (
    <Component
      className={className}
      style={{
        ...style,
        minWidth: size,
        minHeight: size
      }}
      height={size}
      width={size}
    />
  );
}