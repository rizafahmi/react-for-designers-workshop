import styled from 'styled-components';

const Button = styled.button`
  border-radius: 6px;
  padding: 11px 54px;
  font-familiy: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

const PrimaryButton = styled(Button)`
  background-color: #17C3B2;
  border: none;
  color: #FEF9EF;
`

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid #227C9D;
  color: #000000;
`

export default PrimaryButton;