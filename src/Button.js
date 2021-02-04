import styled from "styled-components";
import { themed } from "./theme";

export const Button = styled.button`
  font-size: var(--bigText);

  ${themed}
  color: ${(props) => props.theme.accent};
  border-width: 2px;
  border-color: ${(props) => props.theme.accent};
  border-radius: 0.5rem;
  margin: var(--hPad);
`;
