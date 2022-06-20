// #region Global Imports
// #endregion Global Imports
import { common } from "./common";

const light = {
  colors: {
    ...common.colors,
    toggleBorder: "#ABB7C4",
    gradient: "linear-gradient(#39598A, #79D7ED)",
    primarySection: "#ffffff",
    SecondarySection: "#edf2f8",
    background: "#282C34",
    headerBg: "#20232A",
    cardsBg: "#FFFFFF",
    textColor: "#000000",
    dodgerBlue: "#007BFF",
    navbarBG: "rgba(255, 255, 255, 0.25)",
    navbarBlur: "blur(4px)",
    borderNavbar: "rgba(255, 255, 255, 0.18)",
    text: "#030303",
  },
  ...common,
};

export { light };
