const themeLight = {
  background: "#FF0000"
}

const themeDark = {
  background: "#FF0000"
}

const theme = mode => (mode === "dark" ? themeDark : themeLight)

export default theme;