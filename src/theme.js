const themeLight = {
  background: "#FFFFFF",
  mainFontColor: "#FF0000"
}

const themeDark = {
  background: "#000000",
  mainFontColor: "#00FF00"
}

const theme = mode => (mode === "dark" ? themeDark : themeLight)

export default theme;