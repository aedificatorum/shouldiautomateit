const themeLight = {
  body: "#FFFFFF"
}

const themeDark = {
  body: "#000000"
}

const theme = mode => (mode === "dark" ? themeDark : themeLight)

export default theme;