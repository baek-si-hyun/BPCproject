import styled from "styled-components";

export const SelectWrapperUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const SelectWrapperLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Select = styled.select`
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 0.39rem;
  outline: none;
  /* border: 1px solid ${(props) => props.theme.memberTabBdColor}; */
  border-radius: 15px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.cardColor};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:focus {
    background-color: ${(props) => props.theme.btnBgColor};
    color: ${(props) => props.theme.btnTextColor};
  }
  &:hover {
    background-color: ${(props) => props.theme.btnHoberBgColor};
    color: ${(props) => props.theme.memberActiveBoxBgColor};
  }
`;
export const Option = styled.option`
  font-weight: bold;
  border-radius: 13px;
  padding: 50px;
`;
export const SelectBtn = styled.button`
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background-color: ${(props) => props.theme.cardColor};
  outline: none;
  /* border: 1px solid ${(props) => props.theme.memberTabBdColor}; */
  border-radius: 13px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.btnHoberBgColor};
  }
`;
