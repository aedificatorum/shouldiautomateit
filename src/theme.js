const themeLight = {
  body: "#FFFFFF"
}

const themeDark = {
  body: "#000000"
}

const Theme = mode => (mode === "dark" ? themeDark : themeLight)

export default Theme;