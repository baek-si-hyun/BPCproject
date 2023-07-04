import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggle } from "../../redux/toggleModeSlice";

const OptionBarContainer = styled.div``;
const OptionUl = styled.ul`
  display: flex;
  gap: 0.7rem;
  font-size: 1rem;
`;
const OptionItem = styled.li`
  display: flex;
`;
const OptionLink = styled(Link)`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`;
const ToggleModeBTN = styled.button`
  padding: 2rem 0;
  background: none;
  display: flex;
  line-height: 1.5;
  border: none;
  cursor: pointer;
`;
const MaterialIcon = styled.span`
  color: ${(props) => props.theme.textColor};
  will-change: color;
`;

function OptionBar() {
  const isDarkMode = useSelector(
    (state: { toggleMode: boolean }) => state.toggleMode
  );
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <OptionBarContainer>
      <OptionUl>
        <OptionItem>
          <OptionLink to="/member">
            <span>로그인</span>
          </OptionLink>
        </OptionItem>
        <OptionItem>
          <ToggleModeBTN onClick={() => handleToggle()}>
            {isDarkMode ? (
              <MaterialIcon className="material-symbols-outlined">
                dark_mode
              </MaterialIcon>
            ) : (
              <MaterialIcon className="material-symbols-outlined">
                light_mode
              </MaterialIcon>
            )}
          </ToggleModeBTN>
        </OptionItem>
        <OptionItem>
          <OptionLink to="/my-page">
            <MaterialIcon className="material-symbols-outlined">
              account_circle
            </MaterialIcon>
          </OptionLink>
        </OptionItem>
      </OptionUl>
    </OptionBarContainer>
  );
}

export default OptionBar;
