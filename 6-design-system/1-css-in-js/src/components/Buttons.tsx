import styled from "styled-components";
import { defaultTheme } from "../utils/themes";
import { typeScale } from "../utils/typography";

const Button = styled.button`
  border-radius: 6px;
  padding: 11px 54px;
  font-familiy: ${defaultTheme.primaryFont};
  font-weight: 600;
  font-size: ${typeScale.parargraph};
  line-height: 24px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${defaultTheme.textColorOnPrimary};
  
  &:hover {
    background-color: ${defaultTheme.primaryHoverColor}
  }
  &:focus {}
  &:active {}
  &:disabled {}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.secondaryColor};
  color: ${defaultTheme.textColorOnSecondary};
`;
