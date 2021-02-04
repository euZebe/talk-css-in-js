import { css } from "styled-components";

export const theme = {
  dark: {
    bg: "#282c34",
    accent: "#61dafb",
    text: "white"
  },
  light: {
    bg: "#ddd",
    accent: "#c47",
    text: "black"
  }
};

export const themed = css`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`;

export const darkTheme = css`
  background-color: black;
  color: white;
`;

export const lightTheme = css`
  background-color: white;
  color: black;
`;
export const flexColCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
