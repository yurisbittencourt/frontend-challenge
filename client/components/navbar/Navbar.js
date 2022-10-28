import styled from "styled-components";
import { useCheckIfFixed } from "../../hooks/useCheckScroll";

export default function Navbar({ theme, toggleTheme }) {
  const { isNavFixed } = useCheckIfFixed();

  return (
    <header>
      <Nav fixed={isNavFixed}>
        <NavLink href="/" aria-label="home">
          Hims
        </NavLink>
        <ThemeButton onClick={toggleTheme}>
          {theme === "light" ? "dark theme" : "light theme"}
        </ThemeButton>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  background-color: ${(props) => props.theme.colors.navBackground};
  transition: all 0.5s linear;
  @media ${({ theme }) => theme.breakpoints.lg} {
    position: relative;
    ${({ fixed }) => fixed && "position: fixed;"};
  }
`;

const NavLink = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
`;

const ThemeButton = styled.button`
  width: 140px;
  height: 36px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  border: 0.5px solid ${({ theme }) => theme.colors.buttonBorder};
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => theme.colors.buttonShadow} 0px 2px 16px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`;
