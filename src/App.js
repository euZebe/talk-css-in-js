import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, flexColCentered, lightTheme, theme, themed } from "./theme";
import { Button } from "./Button";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;

    --vPad: .5rem;
    --hPad: 1rem;
    
    --opacity: .6;
    
    --bigText: 1.5rem;
    --hugeText: 2rem;
    --smallText: .75rem;
  }
`;

const Container = styled.div`
  ${themed}
`;

const Main = styled.header`
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  ${flexColCentered}

  > * {
    margin: var(--vPad);
  }
`;

export const Tile = styled.div`
  width: 20vh;
  height: 20vh;
  font-size: 2rem;
  ${(props) => (props.light ? lightTheme : darkTheme)}
  ${flexColCentered}
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Container>
        <GlobalStyle />

        <Button onClick={() => setDarkMode((dm) => !dm)}>Switch theme</Button>

        <Main>
          <Tile>A dark tile</Tile>
          <Tile light>A light tile</Tile>
          And some text
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
