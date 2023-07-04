import styled from "styled-components";

export const MemberForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const MemberInputLabel = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
`;

export const MemberInput = styled.input`
  height: 48px;
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease-in-out;
  will-change: border;
  &:focus {
    border: 1px solid ${(props) => props.theme.inputFocusBdColor};
  }
  &::placeholder {
    color: #c0c0c0;
  }
`;

export const MemberButton = styled.button`
  font-size: 1.5rem;
  border-radius: 5px;
  height: 3.7rem;
  margin: 2rem 0 5rem 0;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.btnTextColor};
  will-change: color, opacity;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;
