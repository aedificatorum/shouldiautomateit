const themeLight = {
  background: "#FFFFFF",
  mainFontColor: "#FF0000",
  navbar: "#90a4ae"
}

const themeDark = {
  background: "#000000",
  mainFontColor: "#00FF00",
  navbar: "#455a64"
}

const theme = mode => (mode === "dark" ? themeDark : themeLight)

export default theme;